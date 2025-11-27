import React from 'react';
import { motion } from 'framer-motion';
import { Link2, BarChart3, Target, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Connect Your Banks",
      description: "Securely link all your Nigerian bank accounts in seconds using our Mono API integration. Your data is encrypted and protected with bank-level security.",
      details: [
        "Connect to 25+ Nigerian banks",
        "Real-time account synchronization",
        "Secure OAuth authentication",
        "No passwords stored on our servers"
      ],
      color: "from-[#F2FE8D] to-[#FF6B35]"
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Track & Analyze",
      description: "Watch as Balanz automatically categorizes your transactions and provides AI-powered insights into your spending patterns and financial health.",
      details: [
        "Automatic transaction categorization",
        "AI-powered spending insights",
        "Real-time expense tracking",
        "Smart budget recommendations"
      ],
      color: "from-[#FF6B35] to-[#F2FE8D]"
    },
    {
      number: "03",
      icon: Target,
      title: "Achieve Your Goals",
      description: "Set financial goals, create budgets, and watch your savings grow with intelligent tracking and personalized recommendations.",
      details: [
        "Set custom savings goals",
        "Smart budget alerts",
        "Progress tracking",
        "Personalized recommendations"
      ],
      color: "from-[#4CAF50] to-[#F2FE8D]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#212121] to-[#2C2C2E]">
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
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
              Balanz Works
            </span>
          </h2>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Getting started with Balanz is simple. Follow these three easy steps
            to transform your financial life in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-[#212121] font-bold text-xl`}>
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#212121]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#B0B0B0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#F2FE8D] rounded-full"></div>
                        <span className="text-[#B0B0B0] text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA for first step */}
                  {index === 0 && (
                    <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                      <span>Get Started Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

                {/* Visual */}
                <div className="flex-1 relative overflow-hidden">
                  <div className={`relative w-full h-80 bg-gradient-to-br ${step.color} rounded-3xl p-8 transform ${
                    isEven ? 'rotate-3' : '-rotate-3'
                  } hover:rotate-0 transition-transform duration-500`}>
                    {/* Mock Content */}
                    <div className="w-full h-full bg-[#212121] rounded-2xl p-6 space-y-4">
                      {index === 0 && (
                        <>
                          <div className="flex items-center justify-between">
                            <h4 className="text-white font-bold">Connect Banks</h4>
                            <div className="w-8 h-8 bg-[#F2FE8D] rounded-full"></div>
                          </div>
                          <div className="space-y-3">
                            {['GTBank', 'Access Bank', 'First Bank', 'UBA'].map((bank, bankIndex) => (
                              <div key={bankIndex} className="flex items-center justify-between p-3 bg-[#2C2C2E] rounded-xl">
                                <span className="text-white text-sm">{bank}</span>
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs">✓</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <div className="flex items-center justify-between">
                            <h4 className="text-white font-bold">Analytics</h4>
                            <div className="w-8 h-8 bg-[#FF6B35] rounded-full"></div>
                          </div>
                          <div className="space-y-4">
                            <div className="h-20 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] rounded-xl flex items-center justify-center">
                              <span className="text-[#212121] font-bold">Spending Chart</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-[#2C2C2E] rounded-lg p-3">
                                <div className="text-xs text-[#B0B0B0]">Food</div>
                                <div className="text-white font-semibold">₦45,000</div>
                              </div>
                              <div className="bg-[#2C2C2E] rounded-lg p-3">
                                <div className="text-xs text-[#B0B0B0]">Transport</div>
                                <div className="text-white font-semibold">₦12,000</div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <div className="flex items-center justify-between">
                            <h4 className="text-white font-bold">Goals</h4>
                            <div className="w-8 h-8 bg-[#4CAF50] rounded-full"></div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-[#2C2C2E] rounded-xl p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-sm">Emergency Fund</span>
                                <span className="text-[#F2FE8D] text-sm">75%</span>
                              </div>
                              <div className="w-full bg-[#212121] rounded-full h-2">
                                <div className="bg-gradient-to-r from-[#4CAF50] to-[#F2FE8D] h-2 rounded-full" style={{width: '75%'}}></div>
                              </div>
                            </div>
                            <div className="bg-[#2C2C2E] rounded-xl p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-sm">New Car</span>
                                <span className="text-[#F2FE8D] text-sm">30%</span>
                              </div>
                              <div className="w-full bg-[#212121] rounded-full h-2">
                                <div className="bg-gradient-to-r from-[#4CAF50] to-[#F2FE8D] h-2 rounded-full" style={{width: '30%'}}></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-[#F2FE8D] rounded-full opacity-30"
                  ></motion.div>
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FF6B35] rounded-full opacity-30"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-[#2C2C2E] rounded-3xl p-8 border border-[#F2FE8D]/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Join thousands of Nigerians who are already taking control of their finances with Balanz.
              Start your financial transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105">
                Download Now
              </button>
              <button className="px-8 py-4 border-2 border-[#F2FE8D] text-[#F2FE8D] font-semibold rounded-xl hover:bg-[#F2FE8D] hover:text-[#212121] transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
