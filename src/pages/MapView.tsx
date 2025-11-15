import React from 'react';
import { motion } from 'framer-motion';
import AirQualityMap from '../components/dashboard/AirQualityMap';
import { MapPin, Layers, Filter } from 'lucide-react';
const MapView = () => {
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Interactive Map View</h1>
          <p className="text-text-secondary">
            Comprehensive air quality visualization across all sensor locations
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors" whileHover={{
          scale: 1.02
        }}>
            <Filter size={16} />
            <span>Filters</span>
          </motion.button>
          <motion.button className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg text-white hover:shadow-glow-primary transition-shadow" whileHover={{
          scale: 1.02
        }}>
            <Layers size={16} />
            <span>Layers</span>
          </motion.button>
        </div>
      </div>
      <div className="h-[calc(100vh-200px)]">
        <AirQualityMap />
      </div>
    </div>;
};
export default MapView;