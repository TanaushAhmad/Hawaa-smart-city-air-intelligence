import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';
interface AlertProps {
  title: string;
  message: string;
  time: string;
  type: 'warning' | 'danger' | 'info' | 'success';
}
const alerts: AlertProps[] = [{
  title: 'PM2.5 Spike Detected',
  message: 'Downtown sensor network reporting 45% increase in PM2.5 levels.',
  time: '15 mins ago',
  type: 'danger'
}, {
  title: 'VOC Alert Cleared',
  message: 'VOC levels have returned to normal ranges in the industrial zone.',
  time: '42 mins ago',
  type: 'success'
}, {
  title: 'Dust Storm Warning',
  message: 'Satellite imagery indicates approaching dust storm from western regions.',
  time: '1 hour ago',
  type: 'warning'
}, {
  title: 'System Update',
  message: 'Sensor calibration completed for northern district nodes.',
  time: '2 hours ago',
  type: 'info'
}, {
  title: 'Pollen Index Rising',
  message: 'Seasonal pollen levels increasing in parks and residential areas.',
  time: '3 hours ago',
  type: 'warning'
}, {
  title: 'Maintenance Notice',
  message: 'Sensor #A457 in downtown area undergoing maintenance.',
  time: '5 hours ago',
  type: 'info'
}];
const Alert: React.FC<AlertProps> = ({
  title,
  message,
  time,
  type
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'warning':
        return 'text-warning';
      case 'danger':
        return 'text-danger';
      case 'info':
        return 'text-primary';
      case 'success':
        return 'text-success';
      default:
        return 'text-primary';
    }
  };
  const getTypeIcon = () => {
    switch (type) {
      case 'warning':
        return <AlertTriangle size={16} className="text-warning" />;
      case 'danger':
        return <AlertTriangle size={16} className="text-danger" />;
      case 'info':
        return <Info size={16} className="text-primary" />;
      case 'success':
        return <CheckCircle size={16} className="text-success" />;
      default:
        return <Info size={16} className="text-primary" />;
    }
  };
  return <motion.div className="p-3 border-b border-gray-800 last:border-b-0" initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} whileHover={{
    backgroundColor: 'rgba(76, 125, 240, 0.05)'
  }}>
      <div className="flex items-start">
        <div className="mt-0.5 mr-3">{getTypeIcon()}</div>
        <div>
          <h3 className={`font-medium text-sm ${getTypeColor()}`}>{title}</h3>
          <p className="text-text-secondary text-xs mt-1">{message}</p>
          <div className="flex items-center text-text-secondary text-xs mt-2">
            <Clock size={12} className="mr-1" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </motion.div>;
};
const AlertFeed = () => {
  return <motion.div className="bg-card rounded-xl h-full flex flex-col" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.5
  }}>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center">
          <Bell size={18} className="text-primary mr-2" />
          <h2 className="font-semibold">Recent Alerts</h2>
        </div>
        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
          {alerts.length} New
        </span>
      </div>
      <div className="overflow-y-auto flex-1">
        {alerts.map((alert, index) => <Alert key={index} title={alert.title} message={alert.message} time={alert.time} type={alert.type} />)}
      </div>
      <div className="p-3 border-t border-gray-800">
        <button className="w-full py-2 text-center text-sm text-primary hover:text-white hover:bg-primary/20 rounded-lg transition-colors">
          View All Alerts
        </button>
      </div>
    </motion.div>;
};
export default AlertFeed;
