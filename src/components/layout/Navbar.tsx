import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [notifications, setNotifications] = useState(3);
  return <motion.nav className="h-16 border-b border-gray-800 bg-card/60 backdrop-blur-md flex items-center justify-between px-6" initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={18} />
          <input type="text" placeholder="Search..." className="bg-background/80 border border-gray-700 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all w-64" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <motion.div className="relative" whileHover={{
        scale: 1.05
      }}>
          <Bell className="text-text-secondary cursor-pointer hover:text-primary transition-colors" />
          {notifications > 0 && <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {notifications}
            </span>}
        </motion.div>
        <motion.div whileHover={{
        scale: 1.05
      }}>
          <Settings className="text-text-secondary cursor-pointer hover:text-primary transition-colors" />
        </motion.div>
        <motion.div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer" whileHover={{
        scale: 1.05,
        boxShadow: '0 0 8px rgba(76, 125, 240, 0.5)'
      }}>
          <User className="text-primary" size={18} />
        </motion.div>
      </div>
    </motion.nav>;
};
export default Navbar;