import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Cloud, Thermometer, Wind, Droplets, Sun, CloudRain } from 'lucide-react';
const correlationData = [{
  time: '00:00',
  pm25: 12,
  temperature: 22,
  humidity: 75,
  windSpeed: 15
}, {
  time: '03:00',
  pm25: 14,
  temperature: 20,
  humidity: 78,
  windSpeed: 12
}, {
  time: '06:00',
  pm25: 18,
  temperature: 19,
  humidity: 82,
  windSpeed: 10
}, {
  time: '09:00',
  pm25: 25,
  temperature: 24,
  humidity: 68,
  windSpeed: 8
}, {
  time: '12:00',
  pm25: 35,
  temperature: 32,
  humidity: 55,
  windSpeed: 5
}, {
  time: '15:00',
  pm25: 30,
  temperature: 34,
  humidity: 50,
  windSpeed: 6
}, {
  time: '18:00',
  pm25: 27,
  temperature: 30,
  humidity: 58,
  windSpeed: 9
}, {
  time: '21:00',
  pm25: 24,
  temperature: 26,
  humidity: 65,
  windSpeed: 11
}];
const Environmental = () => {
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Environmental Correlation</h1>
          <p className="text-text-secondary">
            Understanding how weather patterns affect air quality
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }}>
          <div className="bg-warning/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Thermometer className="text-warning" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">Temperature</h3>
          <p className="text-2xl font-bold text-warning mb-1">32°C</p>
          <p className="text-text-secondary text-sm">
            High temp = Higher pollution
          </p>
        </motion.div>
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Wind className="text-primary" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">Wind Speed</h3>
          <p className="text-2xl font-bold text-primary mb-1">12 km/h</p>
          <p className="text-text-secondary text-sm">
            Moderate dispersion rate
          </p>
        </motion.div>
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }}>
          <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Droplets className="text-secondary" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">Humidity</h3>
          <p className="text-2xl font-bold text-secondary mb-1">65%</p>
          <p className="text-text-secondary text-sm">Moderate moisture level</p>
        </motion.div>
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }}>
          <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Sun className="text-success" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">UV Index</h3>
          <p className="text-2xl font-bold text-success mb-1">8</p>
          <p className="text-text-secondary text-sm">
            Very High - Use protection
          </p>
        </motion.div>
      </div>
      <motion.div className="bg-card rounded-xl p-6 mb-6" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5
    }}>
        <h2 className="text-lg font-semibold mb-4">
          Weather-Pollution Correlation
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={correlationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2F45" />
              <XAxis dataKey="time" stroke="#8A90A6" />
              <YAxis yAxisId="left" stroke="#8A90A6" />
              <YAxis yAxisId="right" orientation="right" stroke="#8A90A6" />
              <Tooltip contentStyle={{
              backgroundColor: '#1a1f32',
              border: '1px solid #2A2F45',
              borderRadius: '8px'
            }} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="pm25" stroke="#4C7DF0" strokeWidth={2} name="PM2.5 (µg/m³)" />
              <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#FFC857" strokeWidth={2} name="Temperature (°C)" />
              <Line yAxisId="right" type="monotone" dataKey="windSpeed" stroke="#00D68F" strokeWidth={2} name="Wind Speed (km/h)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
              <Cloud className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold">Key Findings</h3>
          </div>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                Higher temperatures correlate with increased PM2.5 levels
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                Wind speeds above 15 km/h effectively disperse pollutants
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                High humidity can trap particles near the ground surface
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                Early morning hours show lowest pollution due to cooler temps
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-success/10 w-10 h-10 rounded-lg flex items-center justify-center">
              <CloudRain className="text-success" size={20} />
            </div>
            <h3 className="font-semibold">Weather Impact</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">
                  Temperature Impact
                </span>
                <span className="text-warning font-semibold">High</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{
                width: '85%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">
                  Wind Dispersion
                </span>
                <span className="text-primary font-semibold">Medium</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{
                width: '60%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">
                  Humidity Effect
                </span>
                <span className="text-secondary font-semibold">Medium</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{
                width: '55%'
              }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default Environmental;