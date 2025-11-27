import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Lock,
  BarChart3,
  CreditCard,
  Brain,
  Zap
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Smart Bank Integration",
      description: "Connect all your Nigerian bank accounts securely through Mono API integration. Real-time sync with 25+ banks.",
      highlight: "Connect in seconds"
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Get intelligent insights into your spending patterns, trends, and opportunities to save more money.",
      highlight: "Smart insights"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track savings goals, emergency funds, and financial milestones with smart progress tracking.",
      highlight: "Achieve goals"
    },
    {
      icon: TrendingUp,
      title: "Budget Management",
      description: "Create budgets by category with smart alerts and automated tracking to never overspend again.",
      highlight: "Stay on track"
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your financial data is protected with end-to-end encryption and bank-grade security protocols.",
      highlight: "100% secure"
    },
    {
      icon: Brain,
      title: "Smart Categorization",
      description: "Automatic transaction categorization with AI that learns your spending habits over time.",
      highlight: "Auto-sorted"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 px-4 bg-[#212121]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
              Smart Money Management
            </span>
          </h2>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Balanz combines cutting-edge technology with Nigerian banking infrastructure
            to give you complete control over your financial life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[#2C2C2E] rounded-2xl p-8 hover:bg-[#2C2C2E]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2FE8D]/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2FE8D]/5 to-[#FF6B35]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F2FE8D] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#212121]" />
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block px-3 py-1 bg-[#F2FE8D]/10 border border-[#F2FE8D]/20 rounded-full text-[#F2FE8D] text-sm font-medium mb-4">
                    {feature.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#B0B0B0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2E] to-[#2C2C2E]/50 rounded-3xl p-8 border border-[#F2FE8D]/10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-[#F2FE8D]" />
              <span className="text-[#F2FE8D] font-semibold">Powerful Features</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Financial Life?
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Join thousands of Nigerians who have already taken control of their finances with Balanz.
              Start your journey to financial freedom today.
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
