import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, DollarSign, Target } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Adebayo Ogunlesi",
      role: "Software Engineer",
      location: "Lagos, Nigeria",
      avatar: "AO",
      rating: 5,
      text: "Balanz has completely transformed how I manage my finances. The bank integration is seamless, and the AI insights help me understand my spending patterns better than ever. I've saved over ₦50,000 this month alone!",
      savings: "₦50,000",
      improvement: "+35% savings"
    },
    {
      name: "Chioma Okonkwo",
      role: "Marketing Manager",
      location: "Abuja, Nigeria",
      avatar: "CO",
      rating: 5,
      text: "As a working mother, I needed a simple way to track family expenses. Balanz makes it so easy to set budgets and track spending across all our accounts. The goal tracking feature helped us save for our daughter's education.",
      savings: "₦200,000",
      improvement: "Education fund"
    },
    {
      name: "Emeka Nwosu",
      role: "Entrepreneur",
      location: "Port Harcourt, Nigeria",
      avatar: "EN",
      rating: 5,
      text: "Running a business means managing multiple bank accounts. Balanz gives me a unified view of all my finances in one place. The analytics help me make better business decisions and track cash flow effectively.",
      savings: "₦150,000",
      improvement: "Better cash flow"
    },
    {
      name: "Fatima Ibrahim",
      role: "Doctor",
      location: "Kano, Nigeria",
      avatar: "FI",
      rating: 5,
      text: "The security features give me peace of mind knowing my financial data is protected. The app is intuitive and the customer support is excellent. I recommend Balanz to all my colleagues.",
      savings: "₦75,000",
      improvement: "+25% savings"
    },
    {
      name: "Kemi Adebayo",
      role: "Teacher",
      location: "Ibadan, Nigeria",
      avatar: "KA",
      rating: 5,
      text: "Balanz helped me break the cycle of living paycheck to paycheck. The budget alerts and spending insights are game-changers. I can now plan for the future with confidence.",
      savings: "₦30,000",
      improvement: "Emergency fund"
    },
    {
      name: "Tunde Oladele",
      role: "Student",
      location: "Enugu, Nigeria",
      avatar: "TO",
      rating: 5,
      text: "As a student on a tight budget, every naira counts. Balanz helps me track my expenses and find ways to save. The app is perfect for young people starting their financial journey.",
      savings: "₦15,000",
      improvement: "+40% savings"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "₦2.5B+", label: "Total Savings Generated" },
    { icon: Target, value: "85%", label: "Users Achieve Goals" },
    { icon: DollarSign, value: "₦45,000", label: "Average Monthly Savings" },
    { icon: Star, value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#2C2C2E] to-[#212121]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F2FE8D]/10 border border-[#F2FE8D]/20 text-[#F2FE8D] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Nigerians
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Users Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
              Saying
            </span>
          </h2>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Join thousands of Nigerians who have transformed their financial lives with Balanz.
            Here's what our community has to say about their experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F2FE8D] to-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#212121]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-[#B0B0B0]">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#2C2C2E] rounded-2xl p-8 hover:bg-[#2C2C2E]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2FE8D]/10"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#F2FE8D] to-[#FF6B35] rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-[#212121]" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F2FE8D] text-[#F2FE8D]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F2FE8D] to-[#FF6B35] rounded-full flex items-center justify-center text-[#212121] font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#B0B0B0]">{testimonial.role}</div>
                  <div className="text-xs text-[#B0B0B0]">{testimonial.location}</div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-r from-green-500/10 to-[#F2FE8D]/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-green-400 font-medium">Savings</div>
                    <div className="text-lg font-bold text-white">{testimonial.savings}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#F2FE8D] font-medium">Improvement</div>
                    <div className="text-sm text-[#F2FE8D]">{testimonial.improvement}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#2C2C2E] rounded-3xl p-8 border border-[#F2FE8D]/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. Start your financial transformation today and
              become the next success story in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-[#F2FE8D] text-[#F2FE8D] font-semibold rounded-xl hover:bg-[#F2FE8D] hover:text-[#212121] transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
