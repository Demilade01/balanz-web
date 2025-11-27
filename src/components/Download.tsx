import React from 'react';
import { motion } from 'framer-motion';
import {
  Download as DownloadIcon,
  Apple,
  Play,
  QrCode,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield
} from 'lucide-react';

const Download: React.FC = () => {
  const features = [
    "Connect all Nigerian banks",
    "AI-powered spending insights",
    "Smart budget management",
    "Goal tracking & savings",
    "Bank-level security",
    "Real-time sync"
  ];

  const appStats = [
    { icon: Users, value: "500K+", label: "Downloads" },
    { icon: Star, value: "4.9★", label: "App Store Rating" },
    { icon: Shield, value: "100%", label: "Secure" },
    { icon: DownloadIcon, value: "50MB", label: "App Size" }
  ];

  return (
    <section id="download" className="py-20 px-4 bg-[#212121]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#F2FE8D]/10 border border-[#F2FE8D]/20 text-[#F2FE8D] text-sm font-medium"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Available Now
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Download Balanz{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
                Today
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-[#B0B0B0] leading-relaxed"
            >
              Join thousands of Nigerians who are already taking control of their finances.
              Download the app and start your journey to financial freedom.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F2FE8D] flex-shrink-0" />
                  <span className="text-[#B0B0B0] text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* App Store */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.button>

              {/* Google Play */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#2C2C2E]"
            >
              {appStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F2FE8D] to-[#FF6B35] rounded-xl flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-[#212121]" />
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#B0B0B0]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - QR Code & Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            {/* QR Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 z-10 bg-[#2C2C2E] rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-center">
                <QrCode className="w-24 h-24 text-[#F2FE8D] mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Scan to Download</div>
                <div className="text-sm text-[#B0B0B0]">Available on iOS & Android</div>
              </div>
            </motion.div>

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

                {/* App Store/Download Screen */}
                <div className="px-6 py-4 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-white font-bold text-xl">Download Balanz</h2>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="/icon.png" alt="Balanz Logo" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* App Icon */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                      <img src="/icon.png" alt="Balanz Logo" className="w-20 h-20" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Balanz</h3>
                    <p className="text-[#B0B0B0] text-sm">Personal Finance Management</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F2FE8D] text-[#F2FE8D]" />
                      ))}
                    </div>
                    <span className="text-[#B0B0B0] text-sm">4.9 • 10K+ reviews</span>
                  </div>

                  {/* Download Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-bold rounded-xl flex items-center justify-center space-x-2">
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download Free</span>
                  </button>

                  {/* Features Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-[#2C2C2E] rounded-xl">
                      <div className="w-8 h-8 bg-[#F2FE8D] rounded-lg flex items-center justify-center">
                        <span className="text-[#212121] text-sm">🔗</span>
                      </div>
                      <span className="text-white text-sm">Bank Integration</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-[#2C2C2E] rounded-xl">
                      <div className="w-8 h-8 bg-[#F2FE8D] rounded-lg flex items-center justify-center">
                        <span className="text-[#212121] text-sm">📊</span>
                      </div>
                      <span className="text-white text-sm">Smart Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-[#2C2C2E] rounded-xl">
                      <div className="w-8 h-8 bg-[#F2FE8D] rounded-lg flex items-center justify-center">
                        <span className="text-[#212121] text-sm">🎯</span>
                      </div>
                      <span className="text-white text-sm">Goal Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-[#F2FE8D] rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#FF6B35] rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2E] to-[#2C2C2E]/50 rounded-3xl p-8 border border-[#F2FE8D]/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Financial Journey Today
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Join the thousands of Nigerians who have already transformed their financial lives.
              Download Balanz now and take control of your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <DownloadIcon className="w-5 h-5" />
                <span>Download Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="text-[#B0B0B0] text-sm">
                Free • No hidden fees • Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
