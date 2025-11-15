import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Clock, AlertCircle, Download, Wind } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const forecastData = [{
  time: '00:00',
  pm25: 12,
  pm01: 5,
  forecast: 15,
  confidence: 92
}, {
  time: '03:00',
  pm25: 14,
  pm01: 6,
  forecast: 16,
  confidence: 90
}, {
  time: '06:00',
  pm25: 18,
  pm01: 8,
  forecast: 22,
  confidence: 88
}, {
  time: '09:00',
  pm25: 25,
  pm01: 11,
  forecast: 28,
  confidence: 85
}, {
  time: '12:00',
  pm25: 35,
  pm01: 15,
  forecast: 38,
  confidence: 82
}, {
  time: '15:00',
  pm25: 30,
  pm01: 13,
  forecast: 32,
  confidence: 84
}, {
  time: '18:00',
  pm25: 27,
  pm01: 12,
  forecast: 29,
  confidence: 86
}, {
  time: '21:00',
  pm25: 24,
  pm01: 10,
  forecast: 26,
  confidence: 88
}, {
  time: '24:00',
  pm25: 20,
  pm01: 9,
  forecast: 22,
  confidence: 90
}, {
  time: '27:00',
  pm25: 18,
  pm01: 8,
  forecast: 20,
  confidence: 87
}, {
  time: '30:00',
  pm25: 22,
  pm01: 10,
  forecast: 24,
  confidence: 85
}, {
  time: '33:00',
  pm25: 28,
  pm01: 12,
  forecast: 30,
  confidence: 83
}, {
  time: '36:00',
  pm25: 32,
  pm01: 14,
  forecast: 35,
  confidence: 81
}, {
  time: '39:00',
  pm25: 29,
  pm01: 13,
  forecast: 31,
  confidence: 82
}, {
  time: '42:00',
  pm25: 26,
  pm01: 11,
  forecast: 28,
  confidence: 84
}, {
  time: '45:00',
  pm25: 23,
  pm01: 10,
  forecast: 25,
  confidence: 86
}, {
  time: '48:00',
  pm25: 19,
  pm01: 8,
  forecast: 21,
  confidence: 88
}, {
  time: '51:00',
  pm25: 16,
  pm01: 7,
  forecast: 18,
  confidence: 89
}, {
  time: '54:00',
  pm25: 14,
  pm01: 6,
  forecast: 16,
  confidence: 90
}, {
  time: '57:00',
  pm25: 12,
  pm01: 5,
  forecast: 14,
  confidence: 91
}, {
  time: '60:00',
  pm25: 11,
  pm01: 5,
  forecast: 13,
  confidence: 92
}, {
  time: '63:00',
  pm25: 10,
  pm01: 4,
  forecast: 12,
  confidence: 93
}, {
  time: '66:00',
  pm25: 9,
  pm01: 4,
  forecast: 11,
  confidence: 94
}, {
  time: '69:00',
  pm25: 10,
  pm01: 4,
  forecast: 12,
  confidence: 93
}, {
  time: '72:00',
  pm25: 12,
  pm01: 5,
  forecast: 14,
  confidence: 92
}];
const CustomTooltip = ({
  active,
  payload,
  label
}: any) => {
  if (active && payload && payload.length) {
    return <div className="bg-card p-3 border border-gray-700 rounded-lg shadow-lg">
        <p className="text-text-primary font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => <p key={index} style={{
        color: entry.color
      }}>
            {entry.name}: {entry.value}{' '}
            {entry.name === 'Confidence' ? '%' : 'µg/m³'}
          </p>)}
      </div>;
  }
  return null;
};
const Forecasting = () => {
  const [timeRange, setTimeRange] = useState('72h');
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">
            AI-Powered Pollution Forecasting
          </h1>
          <p className="text-text-secondary">
            Advanced predictions using machine learning and satellite data
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors" whileHover={{
          scale: 1.02
        }}>
            <Download size={16} />
            <span>Export Forecast</span>
          </motion.button>
        </div>
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
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <span className="text-success text-sm font-semibold">
              93% Accurate
            </span>
          </div>
          <h3 className="text-text-secondary text-sm mb-2">
            Forecast Accuracy
          </h3>
          <p className="text-2xl font-bold text-primary">93.2%</p>
          <p className="text-text-secondary text-xs mt-2">
            Based on last 30 days
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
          <div className="flex items-center justify-between mb-4">
            <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Calendar className="text-secondary" size={24} />
            </div>
            <span className="text-warning text-sm font-semibold">Next 72h</span>
          </div>
          <h3 className="text-text-secondary text-sm mb-2">Forecast Range</h3>
          <p className="text-2xl font-bold text-secondary">72 Hours</p>
          <p className="text-text-secondary text-xs mt-2">
            Updated every 15 minutes
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
          <div className="flex items-center justify-between mb-4">
            <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Wind className="text-success" size={24} />
            </div>
            <span className="text-primary text-sm font-semibold">
              Improving
            </span>
          </div>
          <h3 className="text-text-secondary text-sm mb-2">Trend Prediction</h3>
          <p className="text-2xl font-bold text-success">↓ 15%</p>
          <p className="text-text-secondary text-xs mt-2">
            Expected improvement
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
      delay: 0.4
    }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">72-Hour Forecast</h2>
          <div className="flex space-x-2">
            {['24h', '48h', '72h'].map(range => <motion.button key={range} className={`px-4 py-1.5 rounded-lg text-sm ${timeRange === range ? 'bg-primary text-white' : 'bg-background text-text-secondary hover:text-text-primary'}`} onClick={() => setTimeRange(range)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {range}
              </motion.button>)}
          </div>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <defs>
                <linearGradient id="colorPM25" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4C7DF0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4C7DF0" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7A5CFF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7A5CFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2F45" />
              <XAxis dataKey="time" stroke="#8A90A6" tick={{
              fill: '#8A90A6'
            }} />
              <YAxis stroke="#8A90A6" tick={{
              fill: '#8A90A6'
            }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="pm25" stroke="#4C7DF0" strokeWidth={2} dot={false} name="Current PM2.5" />
              <Line type="monotone" dataKey="forecast" stroke="#7A5CFF" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Forecast" />
            </LineChart>
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
        <div className="flex items-start space-x-3 mb-4">
          <div className="bg-warning/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="text-warning" size={20} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Forecast Insights</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                • Air quality expected to improve by 15% over the next 24 hours
              </li>
              <li>
                • Peak pollution levels anticipated around 12:00 PM tomorrow
              </li>
              <li>
                • Favorable wind conditions will help disperse pollutants by
                evening
              </li>
              <li>
                • Confidence level remains high at 92% for short-term
                predictions
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
};
export default Forecasting;