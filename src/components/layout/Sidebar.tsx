import React from 'react';
import { motion } from 'framer-motion';
import { Home, BarChart2, Map, AlertTriangle, Settings, LogOut, Wind } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  const menuItems = [{
    icon: Home,
    label: 'Home',
    path: '/'
  }, {
    icon: BarChart2,
    label: 'Dashboard',
    path: '/dashboard'
  }, {
    icon: Map,
    label: 'Map View',
    path: '/map'
  }, {
    icon: AlertTriangle,
    label: 'Alerts',
    path: '/alerts'
  }, {
    icon: Settings,
    label: 'Settings',
    path: '/settings'
  }];
  return <motion.div className="w-64 bg-card border-r border-gray-800 flex flex-col h-full" initial={{
    x: -50,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Wind className="text-primary" size={28} />
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hawaa
            </h1>
            <p className="text-xs text-text-secondary">
              Air Impurity Intelligence
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 py-6">
        <ul className="space-y-2 px-4">
          {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return <motion.li key={index} whileHover={{
            x: 5
          }} transition={{
            duration: 0.2
          }}>
                <Link to={item.path} className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:text-text-primary'}`}>
                  <motion.div whileHover={{
                rotate: 5
              }} animate={isActive ? {
                scale: 1.1
              } : {
                scale: 1
              }}>
                    <Icon size={20} className={isActive ? 'text-primary' : ''} />
                  </motion.div>
                  <span>{item.label}</span>
                  {isActive && <motion.div className="w-1.5 h-1.5 rounded-full bg-primary ml-auto" layoutId="activeIndicator" />}
                </Link>
              </motion.li>;
        })}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-800">
        <motion.button className="flex items-center space-x-3 text-text-secondary hover:text-danger w-full px-4 py-2 rounded-lg transition-colors" whileHover={{
        x: 5,
        color: '#FF4F64'
      }}>
          <LogOut size={20} />
          <span>Log Out</span>
        </motion.button>
      </div>
    </motion.div>;
};
export default Sidebar;