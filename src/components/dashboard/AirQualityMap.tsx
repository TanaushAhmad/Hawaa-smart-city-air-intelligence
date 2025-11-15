import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, MapPin, Maximize2, Minimize2, Thermometer, Wind, Droplets, Clock, Filter, Activity } from 'lucide-react';
// Sample data for air quality sensors in UAE
const sensorData = [{
  id: 1,
  lat: 25.2048,
  lng: 55.2708,
  value: 35,
  label: 'Dubai Downtown',
  temperature: 32,
  humidity: 65,
  windSpeed: 12
}, {
  id: 2,
  lat: 25.0657,
  lng: 55.1713,
  value: 22,
  label: 'Dubai Marina',
  temperature: 30,
  humidity: 70,
  windSpeed: 15
}, {
  id: 3,
  lat: 24.4539,
  lng: 54.3773,
  value: 28,
  label: 'Abu Dhabi',
  temperature: 33,
  humidity: 62,
  windSpeed: 10
}, {
  id: 4,
  lat: 25.3463,
  lng: 55.4209,
  value: 42,
  label: 'Sharjah',
  temperature: 34,
  humidity: 68,
  windSpeed: 8
}, {
  id: 5,
  lat: 25.4052,
  lng: 55.5136,
  value: 18,
  label: 'Ajman',
  temperature: 31,
  humidity: 72,
  windSpeed: 14
}, {
  id: 6,
  lat: 24.37,
  lng: 54.53,
  value: 31,
  label: 'Al Ain',
  temperature: 35,
  humidity: 55,
  windSpeed: 7
}, {
  id: 7,
  lat: 25.4382,
  lng: 56.0084,
  value: 25,
  label: 'Ras Al Khaimah',
  temperature: 29,
  humidity: 75,
  windSpeed: 16
}, {
  id: 8,
  lat: 25.2867,
  lng: 55.3644,
  value: 38,
  label: 'Deira',
  temperature: 33,
  humidity: 64,
  windSpeed: 11
}];
// Function to determine color based on value
const getMarkerColor = (value: number) => {
  if (value < 20) return '#00D68F';
  if (value < 35) return '#4C7DF0';
  if (value < 50) return '#FFC857';
  return '#FF4F64';
};
const getQualityLabel = (value: number) => {
  if (value < 20) return 'Good';
  if (value < 35) return 'Moderate';
  if (value < 50) return 'Unhealthy for Sensitive Groups';
  return 'Unhealthy';
};
const AirQualityMap = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState<number | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [showWeather, setShowWeather] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState(12);
  const filteredSensors = sensorData.filter(sensor => {
    if (filterLevel === 'all') return true;
    if (filterLevel === 'good') return sensor.value < 20;
    if (filterLevel === 'moderate') return sensor.value >= 20 && sensor.value < 35;
    if (filterLevel === 'unhealthy') return sensor.value >= 35;
    return true;
  });
  return <motion.div className={`bg-card rounded-xl overflow-hidden ${expanded ? 'fixed inset-4 z-50' : 'h-full'}`} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }} layout>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Air Quality Map</h2>
          <p className="text-text-secondary text-sm">
            Live sensor data + satellite AOD
          </p>
        </div>
        <div className="flex space-x-2">
          <motion.button className={`p-1.5 rounded-lg transition-colors ${showWeather ? 'bg-primary text-white' : 'bg-background text-text-secondary hover:text-primary'}`} whileHover={{
          scale: 1.05
        }} onClick={() => setShowWeather(!showWeather)} title="Toggle weather overlay">
            <Thermometer size={18} />
          </motion.button>
          <motion.button className={`p-1.5 rounded-lg transition-colors ${showHeatmap ? 'bg-primary text-white' : 'bg-background text-text-secondary hover:text-primary'}`} whileHover={{
          scale: 1.05
        }} onClick={() => setShowHeatmap(!showHeatmap)} title="Toggle heatmap">
            <Activity size={18} />
          </motion.button>
          <motion.button className="p-1.5 bg-background rounded-lg text-text-secondary hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} onClick={() => setExpanded(!expanded)}>
            {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </motion.button>
        </div>
      </div>
      {/* Filter Bar */}
      <div className="px-4 py-2 bg-background/50 border-b border-gray-800 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Filter size={14} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">Filter:</span>
        </div>
        <div className="flex space-x-2">
          {['all', 'good', 'moderate', 'unhealthy'].map(level => <motion.button key={level} className={`px-3 py-1 rounded-full text-xs ${filterLevel === level ? 'bg-primary text-white' : 'bg-background text-text-secondary hover:text-text-primary'}`} onClick={() => setFilterLevel(level)} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </motion.button>)}
        </div>
      </div>
      {/* Time Slider */}
      <div className="px-4 py-2 bg-background/50 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Clock size={14} className="text-text-secondary" />
          <span className="text-sm text-text-secondary w-16">
            {timeOfDay}:00
          </span>
          <input type="range" min="0" max="23" value={timeOfDay} onChange={e => setTimeOfDay(parseInt(e.target.value))} className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" style={{
          background: `linear-gradient(to right, #4C7DF0 0%, #4C7DF0 ${timeOfDay / 23 * 100}%, #374151 ${timeOfDay / 23 * 100}%, #374151 100%)`
        }} />
        </div>
      </div>
      <div className={`${expanded ? 'h-[calc(100vh-240px)]' : 'h-[300px]'} relative`}>
        <MapContainer center={[24.4539, 54.3773]} zoom={8} style={{
        height: '100%',
        width: '100%'
      }} zoomControl={true}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />
          {filteredSensors.map(sensor => <CircleMarker key={sensor.id} center={[sensor.lat, sensor.lng]} radius={showHeatmap ? sensor.value / 3 + 8 : sensor.value / 5 + 5} pathOptions={{
          fillColor: getMarkerColor(sensor.value),
          fillOpacity: showHeatmap ? 0.4 : 0.7,
          color: getMarkerColor(sensor.value),
          weight: 2
        }} eventHandlers={{
          click: () => setSelectedSensor(sensor.id)
        }}>
              <Popup>
                <div className="text-center min-w-[150px]">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {sensor.label}
                  </h3>
                  <div className="space-y-1 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>PM2.5:</strong> {sensor.value} µg/m³
                    </p>
                    {showWeather && <>
                        <p className="text-sm text-gray-700">
                          <strong>Temp:</strong> {sensor.temperature}°C
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Humidity:</strong> {sensor.humidity}%
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Wind:</strong> {sensor.windSpeed} km/h
                        </p>
                      </>}
                  </div>
                  <p className="text-xs mt-2 font-semibold" style={{
                color: getMarkerColor(sensor.value)
              }}>
                    {getQualityLabel(sensor.value)}
                  </p>
                </div>
              </Popup>
            </CircleMarker>)}
        </MapContainer>
        {/* Sensor Detail Panel */}
        <AnimatePresence>
          {selectedSensor && <motion.div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-64 z-[1000]" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: 20
        }}>
              {(() => {
            const sensor = sensorData.find(s => s.id === selectedSensor);
            if (!sensor) return null;
            return <>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">
                        {sensor.label}
                      </h3>
                      <button onClick={() => setSelectedSensor(null)} className="text-gray-500 hover:text-gray-700">
                        ×
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">PM2.5</span>
                        <span className="font-semibold text-gray-900">
                          {sensor.value} µg/m³
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Temperature
                        </span>
                        <span className="font-semibold text-gray-900">
                          {sensor.temperature}°C
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Humidity</span>
                        <span className="font-semibold text-gray-900">
                          {sensor.humidity}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Wind</span>
                        <span className="font-semibold text-gray-900">
                          {sensor.windSpeed} km/h
                        </span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200 text-center font-semibold" style={{
                  color: getMarkerColor(sensor.value)
                }}>
                        {getQualityLabel(sensor.value)}
                      </div>
                    </div>
                  </>;
          })()}
            </motion.div>}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t border-gray-800 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
            <span className="text-text-secondary text-xs">Good</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-text-secondary text-xs">Moderate</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
            <span className="text-text-secondary text-xs">Sensitive</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-danger mr-2"></div>
            <span className="text-text-secondary text-xs">Unhealthy</span>
          </div>
        </div>
        <div className="flex items-center text-text-secondary text-xs">
          <MapPin size={12} className="mr-1" />
          <span>{filteredSensors.length} active sensors</span>
        </div>
      </div>
    </motion.div>;
};
export default AirQualityMap;