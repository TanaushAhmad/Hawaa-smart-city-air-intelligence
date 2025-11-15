import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Download } from 'lucide-react';
const data = [{
  time: '00:00',
  pm25: 12,
  pm01: 5
}, {
  time: '02:00',
  pm25: 14,
  pm01: 6
}, {
  time: '04:00',
  pm25: 18,
  pm01: 8
}, {
  time: '06:00',
  pm25: 25,
  pm01: 11
}, {
  time: '08:00',
  pm25: 35,
  pm01: 15
}, {
  time: '10:00',
  pm25: 30,
  pm01: 13
}, {
  time: '12:00',
  pm25: 27,
  pm01: 12
}, {
  time: '14:00',
  pm25: 24,
  pm01: 10
}, {
  time: '16:00',
  pm25: 32,
  pm01: 14
}, {
  time: '18:00',
  pm25: 38,
  pm01: 17
}, {
  time: '20:00',
  pm25: 30,
  pm01: 13
}, {
  time: '22:00',
  pm25: 24,
  pm01: 10
}, {
  time: '00:00',
  pm25: 20,
  pm01: 9
}];
const CustomTooltip = ({
  active,
  payload,
  label
}: any) => {
  if (active && payload && payload.length) {
    return <div className="bg-card p-3 border border-gray-700 rounded-lg shadow-lg">
        <p className="text-text-primary font-medium">{label}</p>
        <p className="text-primary">PM2.5: {payload[0].value} µg/m³</p>
        <p className="text-secondary">PM0.1: {payload[1].value} µg/m³</p>
      </div>;
  }
  return null;
};
const ForecastGraph = () => {
  return <motion.div className="bg-card rounded-xl p-6 h-full" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.2
  }}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">24-Hour Forecast</h2>
          <div className="flex items-center text-text-secondary text-sm">
            <Clock size={14} className="mr-1" />
            <span>Updated 15 minutes ago</span>
          </div>
        </div>
        <motion.button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors text-sm" whileHover={{
        scale: 1.05
      }}>
          <Download size={14} />
          <span>Export Data</span>
        </motion.button>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0
        }}>
            <defs>
              <linearGradient id="colorPM25" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4C7DF0" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4C7DF0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPM01" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7A5CFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7A5CFF" stopOpacity={0} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2F45" vertical={false} />
            <XAxis dataKey="time" stroke="#8A90A6" tick={{
            fill: '#8A90A6'
          }} tickLine={{
            stroke: '#8A90A6'
          }} />
            <YAxis stroke="#8A90A6" tick={{
            fill: '#8A90A6'
          }} tickLine={{
            stroke: '#8A90A6'
          }} tickFormatter={value => `${value}`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="pm25" stroke="#4C7DF0" strokeWidth={2} fillOpacity={1} fill="url(#colorPM25)" filter="url(#glow)" />
            <Area type="monotone" dataKey="pm01" stroke="#7A5CFF" strokeWidth={2} fillOpacity={1} fill="url(#colorPM01)" filter="url(#glow)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex space-x-4 mt-4 justify-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
          <span className="text-text-secondary text-sm">PM2.5 (µg/m³)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
          <span className="text-text-secondary text-sm">PM0.1 (µg/m³)</span>
        </div>
      </div>
    </motion.div>;
};
export default ForecastGraph;