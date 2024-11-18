import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Space?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Schedule a live demo to see how our AI Sales Agents can revolutionize
              your customer experience and boost your bottom line.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            
            <p className="mt-6 text-gray-500 text-sm">
              No credit card required • Free consultation • Live demo
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}