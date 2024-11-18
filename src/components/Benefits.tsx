import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased ROI",
    description: "Average 35% increase in sales conversion rates and 25% reduction in operational costs.",
    stat: "35%",
    statLabel: "Higher Conversion"
  },
  {
    icon: Clock,
    title: "Improved Efficiency",
    description: "Reduce wait times by 60% while handling 3x more customer inquiries simultaneously.",
    stat: "60%",
    statLabel: "Less Wait Time"
  },
  {
    icon: Heart,
    title: "Enhanced Experience",
    description: "92% customer satisfaction rate with AI-powered personalized shopping assistance.",
    stat: "92%",
    statLabel: "Satisfaction Rate"
  }
];

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-800 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Business Metrics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI Sales Agents deliver measurable results across key performance indicators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-gray-900 border border-gray-700 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <benefit.icon className="w-12 h-12 text-cyan-400 mb-6" />
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{benefit.stat}</span>
                <span className="block text-sm text-gray-400 mt-1">{benefit.statLabel}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}