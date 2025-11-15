import React from 'react';
import { motion } from 'framer-motion';
import AlertFeed from '../components/dashboard/AlertFeed';
import { Bell, Filter, Download } from 'lucide-react';
const Alerts = () => {
  return <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Alert Management</h1>
          <p className="text-text-secondary">
            View and manage all air quality alerts and notifications
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors" whileHover={{
          scale: 1.02
        }}>
            <Filter size={16} />
            <span>Filter</span>
          </motion.button>
          <motion.button className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg text-white hover:shadow-glow-primary transition-shadow" whileHover={{
          scale: 1.02
        }}>
            <Download size={16} />
            <span>Export</span>
          </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div className="bg-card rounded-xl p-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            <h2 className="text-lg font-semibold mb-4">Alert Timeline</h2>
            <div className="h-[600px]">
              <AlertFeed />
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div className="bg-card rounded-xl p-6 mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }}>
            <h2 className="text-lg font-semibold mb-4">Alert Statistics</h2>
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-4">
                <p className="text-text-secondary text-sm mb-1">
                  Total Alerts Today
                </p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-text-secondary text-sm mb-1">
                  Critical Alerts
                </p>
                <p className="text-2xl font-bold text-danger">3</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-text-secondary text-sm mb-1">Resolved</p>
                <p className="text-2xl font-bold text-success">18</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Alerts;
