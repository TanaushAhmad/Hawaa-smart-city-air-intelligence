import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, User, Shield, Database, Palette, Globe } from 'lucide-react';
const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const settingsSections = [{
    icon: User,
    title: 'Account Settings',
    description: 'Manage your profile and preferences',
    color: 'text-primary'
  }, {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure alert preferences',
    color: 'text-warning'
  }, {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Control your data and security settings',
    color: 'text-success'
  }, {
    icon: Database,
    title: 'Data Management',
    description: 'Export and manage your data',
    color: 'text-secondary'
  }, {
    icon: Palette,
    title: 'Appearance',
    description: 'Customize the interface',
    color: 'text-primary'
  }, {
    icon: Globe,
    title: 'Regional Settings',
    description: 'Set your location and units',
    color: 'text-success'
  }];
  return <div className="w-full h-full max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Settings</h1>
        <p className="text-text-secondary">
          Manage your account and application preferences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => <motion.div key={index} className="bg-card rounded-xl p-6 hover:shadow-glow-primary transition-all cursor-pointer" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} whileHover={{
        y: -5
      }}>
            <div className="flex items-start space-x-4">
              <div className={`${section.color} bg-background/50 p-3 rounded-lg`}>
                <section.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{section.title}</h3>
                <p className="text-text-secondary text-sm">
                  {section.description}
                </p>
              </div>
            </div>
          </motion.div>)}
      </div>
      <motion.div className="bg-card rounded-xl p-6 mt-6" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6
    }}>
        <h2 className="text-lg font-semibold mb-4">Quick Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-text-secondary text-sm">
                Receive alerts on your device
              </p>
            </div>
            <motion.button className={`w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-primary' : 'bg-gray-700'}`} onClick={() => setNotifications(!notifications)} whileTap={{
            scale: 0.95
          }}>
              <motion.div className="w-5 h-5 bg-white rounded-full" animate={{
              x: notifications ? 24 : 2
            }} transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }} />
            </motion.button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-text-secondary text-sm">Use dark theme</p>
            </div>
            <motion.button className={`w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-primary' : 'bg-gray-700'}`} onClick={() => setDarkMode(!darkMode)} whileTap={{
            scale: 0.95
          }}>
              <motion.div className="w-5 h-5 bg-white rounded-full" animate={{
              x: darkMode ? 24 : 2
            }} transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>;
};
export default Settings;