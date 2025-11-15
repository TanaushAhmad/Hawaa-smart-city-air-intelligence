import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Droplet, Wind, Cloud, AlertTriangle, Download } from 'lucide-react';
const particleData = [{
  name: 'PM2.5',
  value: 35,
  color: '#4C7DF0'
}, {
  name: 'PM10',
  value: 52,
  color: '#7A5CFF'
}, {
  name: 'PM0.1',
  value: 18,
  color: '#00D68F'
}, {
  name: 'NO2',
  value: 28,
  color: '#FFC857'
}, {
  name: 'SO2',
  value: 12,
  color: '#FF4F64'
}, {
  name: 'CO',
  value: 8,
  color: '#8A90A6'
}];
const hourlyData = [{
  hour: '00:00',
  pm25: 12,
  pm10: 18,
  pm01: 5
}, {
  hour: '03:00',
  pm25: 14,
  pm10: 20,
  pm01: 6
}, {
  hour: '06:00',
  pm25: 18,
  pm10: 25,
  pm01: 8
}, {
  hour: '09:00',
  pm25: 25,
  pm10: 35,
  pm01: 11
}, {
  hour: '12:00',
  pm25: 35,
  pm10: 52,
  pm01: 15
}, {
  hour: '15:00',
  pm25: 30,
  pm10: 45,
  pm01: 13
}, {
  hour: '18:00',
  pm25: 27,
  pm10: 40,
  pm01: 12
}, {
  hour: '21:00',
  pm25: 24,
  pm10: 35,
  pm01: 10
}];
const Analysis = () => {
  const [selectedParticle, setSelectedParticle] = useState('PM2.5');
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Particle Analysis</h1>
          <p className="text-text-secondary">
            Detailed breakdown of air pollutants and particles
          </p>
        </div>
        <motion.button className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg text-white hover:shadow-glow-primary transition-shadow" whileHover={{
        scale: 1.02
      }}>
          <Download size={16} />
          <span>Export Report</span>
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }}>
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Droplet className="text-primary" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">PM2.5 Level</h3>
          <p className="text-2xl font-bold text-primary mb-1">35 µg/m³</p>
          <p className="text-warning text-sm">Moderate - Sensitive groups</p>
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
          <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Wind className="text-secondary" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">PM10 Level</h3>
          <p className="text-2xl font-bold text-secondary mb-1">52 µg/m³</p>
          <p className="text-warning text-sm">Moderate - Monitor closely</p>
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
          <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Cloud className="text-success" size={24} />
          </div>
          <h3 className="text-text-secondary text-sm mb-2">PM0.1 Level</h3>
          <p className="text-2xl font-bold text-success mb-1">18 µg/m³</p>
          <p className="text-success text-sm">Good - Safe levels</p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }}>
          <h2 className="text-lg font-semibold mb-4">Particle Composition</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={particleData} cx="50%" cy="50%" labelLine={false} label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {particleData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div className="bg-card rounded-xl p-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }}>
          <h2 className="text-lg font-semibold mb-4">24-Hour Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2F45" />
                <XAxis dataKey="hour" stroke="#8A90A6" />
                <YAxis stroke="#8A90A6" />
                <Tooltip contentStyle={{
                backgroundColor: '#1a1f32',
                border: '1px solid #2A2F45',
                borderRadius: '8px'
              }} />
                <Legend />
                <Bar dataKey="pm25" fill="#4C7DF0" name="PM2.5" />
                <Bar dataKey="pm10" fill="#7A5CFF" name="PM10" />
                <Bar dataKey="pm01" fill="#00D68F" name="PM0.1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      <motion.div className="bg-card rounded-xl p-6" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6
    }}>
        <h2 className="text-lg font-semibold mb-4">Pollutant Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {particleData.map((particle, index) => <motion.div key={particle.name} className="bg-background rounded-lg p-4 cursor-pointer" whileHover={{
          scale: 1.02,
          backgroundColor: '#1a1f32'
        }} onClick={() => setSelectedParticle(particle.name)}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{particle.name}</h3>
                <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: particle.color
            }}></div>
              </div>
              <p className="text-2xl font-bold mb-1" style={{
            color: particle.color
          }}>
                {particle.value} µg/m³
              </p>
              <p className="text-text-secondary text-sm">
                {particle.value < 20 ? 'Good' : particle.value < 35 ? 'Moderate' : 'Unhealthy'}
              </p>
            </motion.div>)}
        </div>
      </motion.div>
      <motion.div className="bg-card rounded-xl p-6 mt-6" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.7
    }}>
        <div className="flex items-start space-x-3">
          <div className="bg-warning/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="text-warning" size={20} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Health Recommendations</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                • Sensitive groups should limit prolonged outdoor exertion
              </li>
              <li>• Consider wearing N95 masks during peak pollution hours</li>
              <li>
                • Keep windows closed during high pollution periods (9 AM - 3
                PM)
              </li>
              <li>• Use air purifiers indoors for additional protection</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
};
export default Analysis;