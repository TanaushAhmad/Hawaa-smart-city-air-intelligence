import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  change?: number;
  status: 'normal' | 'warning' | 'danger' | 'success';
  icon: React.ReactNode;
}
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  change,
  status,
  icon
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'normal':
        return 'text-primary';
      case 'warning':
        return 'text-warning';
      case 'danger':
        return 'text-danger';
      case 'success':
        return 'text-success';
      default:
        return 'text-primary';
    }
  };
  const getStatusBg = () => {
    switch (status) {
      case 'normal':
        return 'bg-primary/10';
      case 'warning':
        return 'bg-warning/10';
      case 'danger':
        return 'bg-danger/10';
      case 'success':
        return 'bg-success/10';
      default:
        return 'bg-primary/10';
    }
  };
  const getGlowEffect = () => {
    switch (status) {
      case 'normal':
        return 'shadow-glow-primary';
      case 'warning':
        return 'shadow-glow-warning';
      case 'danger':
        return 'shadow-glow-danger';
      case 'success':
        return 'shadow-glow-success';
      default:
        return 'shadow-glow-primary';
    }
  };
  return <motion.div className={`bg-card rounded-xl p-4 h-full transition-all`} whileHover={{
    y: -5,
    boxShadow: '0 0 15px rgba(76, 125, 240, 0.3)'
  }} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${getStatusBg()} w-10 h-10 rounded-lg flex items-center justify-center`}>
          <div className={getStatusColor()}>{icon}</div>
        </div>
        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <Info size={16} />
        </button>
      </div>
      <div>
        <h3 className="text-text-secondary text-sm mb-1">{title}</h3>
        <div className="flex items-end space-x-2">
          <span className={`text-2xl font-bold ${getStatusColor()}`}>
            {value}
          </span>
          <span className="text-text-secondary text-sm">{unit}</span>
        </div>
      </div>
      {change !== undefined && <div className="mt-2 flex items-center">
          <span className={change >= 0 ? 'text-success' : 'text-danger'}>
            {change >= 0 ? '+' : ''}
            {change}%
          </span>
          <span className="text-text-secondary text-xs ml-1">
            from yesterday
          </span>
        </div>}
    </motion.div>;
};
export default MetricCard;