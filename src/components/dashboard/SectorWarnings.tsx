import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Truck, Heart, Users, AlertTriangle, Info, CheckCircle } from 'lucide-react';
interface SectorWarningProps {
  title: string;
  status: 'warning' | 'danger' | 'info' | 'success';
  message: string;
  icon: React.ReactNode;
}
const SectorWarning: React.FC<SectorWarningProps> = ({
  title,
  status,
  message,
  icon
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'warning':
        return 'bg-warning/10 border-warning/30 text-warning';
      case 'danger':
        return 'bg-danger/10 border-danger/30 text-danger';
      case 'info':
        return 'bg-primary/10 border-primary/30 text-primary';
      case 'success':
        return 'bg-success/10 border-success/30 text-success';
      default:
        return 'bg-primary/10 border-primary/30 text-primary';
    }
  };
  const getStatusIcon = () => {
    switch (status) {
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'danger':
        return <AlertTriangle size={16} />;
      case 'info':
        return <Info size={16} />;
      case 'success':
        return <CheckCircle size={16} />;
      default:
        return <Info size={16} />;
    }
  };
  return <motion.div className={`border rounded-xl p-4 ${getStatusColor()}`} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} whileHover={{
    scale: 1.02
  }}>
      <div className="flex items-start">
        <div className="bg-background/30 rounded-lg p-2 mr-3">{icon}</div>
        <div>
          <div className="flex items-center mb-1">
            <h3 className="font-semibold mr-2">{title}</h3>
            {getStatusIcon()}
          </div>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </motion.div>;
};
const SectorWarnings = () => {
  return <motion.div className="bg-card rounded-xl p-6 h-full" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.4
  }}>
      <h2 className="text-lg font-semibold mb-4">Sector Advisories</h2>
      <div className="grid grid-cols-1 gap-4">
        <SectorWarning title="Aviation" status="warning" message="Reduced visibility expected at Dubai and Abu Dhabi airports between 18:00-22:00." icon={<Plane />} />
        <SectorWarning title="Logistics" status="info" message="Normal operations for ground transport. No significant air quality impact." icon={<Truck />} />
        <SectorWarning title="Healthcare" status="danger" message="High PM2.5 levels may affect respiratory patients. Increased ER visits expected." icon={<Heart />} />
        <SectorWarning title="Citizens" status="warning" message="Outdoor activities not recommended for sensitive groups until 22:00." icon={<Users />} />
      </div>
    </motion.div>;
};
export default SectorWarnings;