import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Store, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            Transform Retail with AI Sales Agents
          </h1>
          <p className="text-gray-300 text-xl mb-12">
            Revolutionize your retail space with intelligent digital signage that understands, engages, and converts customers.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors"
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-colors"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: Bot, text: "AI-Powered Interactions" },
            { icon: Store, text: "Smart Retail Solutions" },
            { icon: Users, text: "Enhanced Customer Experience" }
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}