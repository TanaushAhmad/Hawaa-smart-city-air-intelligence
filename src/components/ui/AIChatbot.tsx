import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "Hello! I'm Hawaa, your AI assistant. How can I help you with air quality insights today?",
    sender: 'ai',
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (inputValue.trim() === '') return;
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    setIsTyping(true);
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('air quality') || lowerMessage.includes('aqi')) {
      return 'Current air quality in your area is moderate with a PM2.5 level of 35 µg/m³. I recommend limiting outdoor activities for sensitive groups.';
    } else if (lowerMessage.includes('forecast') || lowerMessage.includes('prediction')) {
      return 'Based on our 24-hour forecast, air quality is expected to improve by evening with PM2.5 levels dropping to around 20 µg/m³.';
    } else if (lowerMessage.includes('sensor') || lowerMessage.includes('data')) {
      return 'We have 8 active sensors across the city providing real-time data. All sensors are currently operational and calibrated.';
    } else if (lowerMessage.includes('alert') || lowerMessage.includes('warning')) {
      return "There's currently a warning for the healthcare sector due to elevated PM2.5 levels. Respiratory patients should take precautions.";
    } else {
      return 'I can help you with air quality data, forecasts, sensor information, and health advisories. What would you like to know?';
    }
  };
  return <>
      {/* Floating Chat Button */}
      <motion.button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-primary flex items-center justify-center z-50" whileHover={{
      scale: 1.1,
      boxShadow: '0 0 25px rgba(76, 125, 240, 0.6)'
    }} whileTap={{
      scale: 0.95
    }} onClick={() => setIsOpen(!isOpen)} animate={isOpen ? {
      rotate: 0
    } : {
      rotate: 0
    }}>
        <AnimatePresence mode="wait">
          {isOpen ? <motion.div key="close" initial={{
          rotate: -90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: 90,
          opacity: 0
        }}>
              <X size={24} className="text-white" />
            </motion.div> : <motion.div key="open" initial={{
          rotate: 90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: -90,
          opacity: 0
        }}>
              <MessageCircle size={24} className="text-white" />
            </motion.div>}
        </AnimatePresence>
      </motion.button>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-800" initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} transition={{
        duration: 0.2
      }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Hawaa AI</h3>
                  <p className="text-white/80 text-xs">Air Quality Assistant</p>
                </div>
              </div>
              <motion.div className="w-2 h-2 rounded-full bg-success" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} />
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => <motion.div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                      {message.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                    </div>
                    <div>
                      <div className={`rounded-2xl p-3 ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-background text-text-primary'}`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <p className="text-xs text-text-secondary mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
              {isTyping && <motion.div className="flex justify-start" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }}>
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-background rounded-2xl p-3">
                      <div className="flex space-x-1">
                        <motion.div className="w-2 h-2 rounded-full bg-text-secondary" animate={{
                    y: [0, -5, 0]
                  }} transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0
                  }} />
                        <motion.div className="w-2 h-2 rounded-full bg-text-secondary" animate={{
                    y: [0, -5, 0]
                  }} transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.2
                  }} />
                        <motion.div className="w-2 h-2 rounded-full bg-text-secondary" animate={{
                    y: [0, -5, 0]
                  }} transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.4
                  }} />
                      </div>
                    </div>
                  </div>
                </motion.div>}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask about air quality..." className="flex-1 bg-background border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <motion.button onClick={handleSend} className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} disabled={inputValue.trim() === ''}>
                  <Send size={18} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default AIChatbox;
