import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Wind, Droplet, Thermometer, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIChatbox from '../components/ui/AIChatbox';
const Home = () => {
  const fadeInUp = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5
    }
  };
  const features = [{
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Track air quality metrics across your city with millisecond precision',
    path: '/dashboard'
  }, {
    icon: Wind,
    title: 'Pollution Forecasting',
    description: 'AI-powered predictions of impurity levels up to 72 hours in advance',
    path: '/forecasting'
  }, {
    icon: Droplet,
    title: 'Particle Analysis',
    description: 'Detailed breakdown of PM2.5, PM0.1, and other harmful particles',
    path: '/analysis'
  }, {
    icon: Thermometer,
    title: 'Environmental Correlation',
    description: 'See how weather patterns affect air quality in your region',
    path: '/environmental'
  }, {
    icon: Shield,
    title: 'Health Advisories',
    description: 'Automatic alerts when air quality poses health risks',
    path: '/alerts'
  }, {
    icon: MapPin,
    title: 'Localized Insights',
    description: 'Neighborhood-level air quality data for precise monitoring',
    path: '/map'
  }];
  return <div className="w-full max-w-7xl mx-auto">
      <motion.section className="mb-12" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }}>
        <motion.div className="relative rounded-2xl overflow-hidden h-[400px] flex items-center" whileHover={{
        scale: 1.01
      }} transition={{
        duration: 0.3
      }}>
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent">
              <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
              mixBlendMode: 'overlay'
            }}></div>
            </div>
          </div>
          {/* Content */}
          <div className="relative z-10 p-12 max-w-3xl">
            <motion.h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" initial={{
            y: -20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              Hawaa: Smart City Air Intelligence
            </motion.h1>
            <motion.p className="text-text-primary text-lg mb-8 leading-relaxed" initial={{
            y: -20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              Advanced monitoring and forecasting of air impurities across urban
              environments. Protecting citizens through data-driven insights and
              real-time alerts.
            </motion.p>
            <motion.div initial={{
            y: -20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              <Link to="/dashboard">
                <motion.button className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-lg text-white font-medium flex items-center space-x-2 hover:shadow-glow-primary transition-shadow" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }}>
                  <span>Enter Dashboard</span>
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="mb-12" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      delay: 0.2
    }}>
        <motion.h2 className="text-2xl font-bold mb-8 text-center" {...fadeInUp}>
          Comprehensive Air Quality Intelligence
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <Link key={index} to={feature.path}>
              <motion.div className="bg-card rounded-xl p-6 hover:shadow-glow-primary transition-all cursor-pointer h-full" initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }} whileHover={{
            y: -5,
            boxShadow: '0 0 15px rgba(76, 125, 240, 0.3)',
            backgroundColor: '#1a1f32'
          }}>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            </Link>)}
        </div>
      </motion.section>
      <motion.section className="mb-12 bg-card rounded-2xl p-8" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      delay: 0.4
    }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 className="text-2xl font-bold mb-4" {...fadeInUp}>
              Powering Smart Cities Worldwide
            </motion.h2>
            <motion.p className="text-text-secondary mb-6" {...fadeInUp} transition={{
            delay: 0.1
          }}>
              Hawaa is deployed in major metropolitan areas across the UAE,
              helping urban planners, health officials, and citizens make
              informed decisions based on real-time air quality data.
            </motion.p>
            <motion.div className="flex space-x-4" {...fadeInUp} transition={{
            delay: 0.2
          }}>
              <div className="bg-background rounded-lg p-4 flex-1">
                <h4 className="text-4xl font-bold text-primary mb-1">93%</h4>
                <p className="text-text-secondary text-sm">
                  Prediction Accuracy
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 flex-1">
                <h4 className="text-4xl font-bold text-secondary mb-1">50+</h4>
                <p className="text-text-secondary text-sm">Cities Worldwide</p>
              </div>
              <div className="bg-background rounded-lg p-4 flex-1">
                <h4 className="text-4xl font-bold text-success mb-1">24/7</h4>
                <p className="text-text-secondary text-sm">
                  Real-time Monitoring
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div className="relative h-64 rounded-xl overflow-hidden" initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Smart city at night with air quality sensors" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-text-primary">
              Dubai deployment - 2023
            </div>
          </motion.div>
        </div>
      </motion.section>
      <AIChatbox />
    </div>;
};
export default Home;