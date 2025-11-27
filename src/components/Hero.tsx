import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#212121] via-[#2C2C2E] to-[#212121] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#F2FE8D]/10 border border-[#F2FE8D]/20 text-[#F2FE8D] text-sm font-medium"
          >
            <span className="w-2 h-2 bg-[#F2FE8D] rounded-full mr-2 animate-pulse"></span>
            Built for Nigerians, by Nigerians
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Your Financial Life,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
              Simplified
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#B0B0B0] leading-relaxed"
          >
            Smart money management for modern Nigerians. Connect your banks, track spending,
            and achieve your financial goals with AI-powered insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Balanz</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="px-8 py-4 border-2 border-[#F2FE8D] text-[#F2FE8D] font-semibold rounded-xl hover:bg-[#F2FE8D] hover:text-[#212121] transition-all duration-300">
              See How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-[#2C2C2E]"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F2FE8D]">50K+</div>
              <div className="text-sm text-[#B0B0B0]">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F2FE8D]">₦2.5B+</div>
              <div className="text-sm text-[#B0B0B0]">Transactions Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F2FE8D]">4.9★</div>
              <div className="text-sm text-[#B0B0B0]">App Store Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - App Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Phone Mockup */}
          <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-[#2C2C2E] to-[#1a1a1a] rounded-[3rem] p-4 shadow-2xl">
            {/* Phone Screen */}
            <div className="w-full h-full bg-[#212121] rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="px-6 py-4 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-white font-bold text-xl">Balanz</h2>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="/icon.png" alt="Balanz Logo" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Balance Card */}
                <div className="bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] rounded-2xl p-6 text-[#212121]">
                  <div className="text-sm opacity-80">Total Balance</div>
                  <div className="text-3xl font-bold">₦125,430</div>
                  <div className="text-sm opacity-80 mt-2">+12.5% this month</div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#2C2C2E] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-[#F2FE8D] text-lg">💳</span>
                    </div>
                    <span className="text-xs text-[#B0B0B0]">Cards</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#2C2C2E] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-[#F2FE8D] text-lg">📊</span>
                    </div>
                    <span className="text-xs text-[#B0B0B0]">Analytics</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#2C2C2E] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-[#F2FE8D] text-lg">🎯</span>
                    </div>
                    <span className="text-xs text-[#B0B0B0]">Goals</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#2C2C2E] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-[#F2FE8D] text-lg">⚙️</span>
                    </div>
                    <span className="text-xs text-[#B0B0B0]">Settings</span>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold">Recent Transactions</h3>
                  {[
                    { name: "Netflix Subscription", amount: "-₦3,500", type: "entertainment" },
                    { name: "Uber Ride", amount: "-₦850", type: "transport" },
                    { name: "Salary", amount: "+₦150,000", type: "income" },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full ${
                          transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-white text-sm">{transaction.name}</span>
                      </div>
                      <span className={`text-sm font-semibold ${
                        transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-[#F2FE8D] rounded-full opacity-20"
          ></motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#FF6B35] rounded-full opacity-20"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
