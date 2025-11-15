import React, { Children } from 'react';
import { motion } from 'framer-motion';
import MetricCard from '../components/dashboard/MetricCard';
import ForecastGraph from '../components/dashboard/ForecastGraph';
import AirQualityMap from '../components/dashboard/AirQualityMap';
import SectorWarnings from '../components/dashboard/SectorWarnings';
import AlertFeed from '../components/dashboard/AlertFeed';
import { Wind, Droplet, Cloud, Flower2, Waves, Download, Share2 } from 'lucide-react';
const Dashboard = () => {
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Air Quality Dashboard</h1>
          <p className="text-text-secondary">
            Real-time air impurity monitoring and forecasting
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors" whileHover={{
          scale: 1.02
        }}>
            <Download size={16} />
            <span>Export</span>
          </motion.button>
          <motion.button className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg text-white hover:shadow-glow-primary transition-shadow" whileHover={{
          scale: 1.02,
          boxShadow: '0 0 15px rgba(76, 125, 240, 0.5)'
        }} whileTap={{
          scale: 0.98
        }}>
            <Share2 size={16} />
            <span>Share Report</span>
          </motion.button>
        </div>
      </div>
      {/* Metric Cards */}
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      staggerChildren: 0.1
    }}>
        <MetricCard title="PM2.5 Level" value={35} unit="µg/m³" change={12} status="warning" icon={<Wind size={20} />} />
        <MetricCard title="PM0.1 Level" value={18} unit="µg/m³" change={-5} status="normal" icon={<Droplet size={20} />} />
        <MetricCard title="Dust Level" value={42} unit="µg/m³" change={8} status="warning" icon={<Cloud size={20} />} />
        <MetricCard title="Pollen Index" value="High" unit="" change={15} status="danger" icon={<Flower2 size={20} />} />
        <MetricCard title="VOC Index" value={2.4} unit="ppm" change={-2} status="success" icon={<div size={20} />} />
        <MetricCard title="Salt Aerosol" value={12} unit="µg/m³" change={0} status="normal" icon={<Waves size={20} />} />
      </motion.div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ForecastGraph />
        </div>
        <div>
          <SectorWarnings />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <AirQualityMap />
        </div>
        <div>
          <AlertFeed />
        </div>
      </div>
    </div>;
};
export default Dashboard;