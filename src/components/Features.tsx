import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Languages,
  BarChart3,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Users,
  Workflow
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Real-time Customer Interaction",
    description: "AI-powered conversations that understand context and intent"
  },
  {
    icon: ShoppingCart,
    title: "Smart Product Recommendations",
    description: "Personalized suggestions based on customer behavior"
  },
  {
    icon: Workflow,
    title: "Seamless Order Processing",
    description: "Automated checkout and inventory management"
  },
  {
    icon: Languages,
    title: "Multi-language Support",
    description: "Connect with customers in their preferred language"
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Unified customer data and interaction history"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights and performance metrics"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Automated booking and reminder system"
  },
  {
    icon: MessageSquare,
    title: "24/7 Customer Support",
    description: "Always-on assistance for your customers"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Powerful Features for Modern Retail
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI Sales Agents come equipped with everything you need to transform
            your retail space into an intelligent shopping environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}