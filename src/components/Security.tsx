import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Server,
  Fingerprint,
  Award,
  Users,
  Globe
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Level Encryption",
      description: "Your financial data is protected with AES-256 encryption, the same standard used by major banks worldwide.",
      highlight: "AES-256"
    },
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Data is encrypted from your device to our servers and back, ensuring complete privacy and security.",
      highlight: "E2E Protected"
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Secure your account with fingerprint and face recognition technology for maximum protection.",
      highlight: "Biometric"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our servers are hosted on AWS with SOC 2 compliance and regular security audits.",
      highlight: "SOC 2"
    },
    {
      icon: Eye,
      title: "Privacy First",
      description: "We never sell your data. Your financial information belongs to you and is only used to improve your experience.",
      highlight: "No Data Sale"
    },
    {
      icon: CheckCircle,
      title: "Regular Audits",
      description: "Independent security experts regularly audit our systems to ensure the highest security standards.",
      highlight: "Audited"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "PCI DSS", description: "Payment Card Security" },
    { name: "GDPR Compliant", description: "Data Protection" }
  ];

  const trustIndicators = [
    { icon: Users, value: "500K+", label: "Trusted Users" },
    { icon: Award, value: "99.9%", label: "Uptime" },
    { icon: Globe, value: "25+", label: "Banks Connected" },
    { icon: Shield, value: "Zero", label: "Security Breaches" }
  ];

  return (
    <section className="py-20 px-4 bg-[#212121]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Bank-Level Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Financial Data is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#F2FE8D]">
              Protected
            </span>
          </h2>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            We understand that your financial data is sensitive. That's why we've built Balanz
            with the highest security standards to keep your information safe and secure.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#F2FE8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#212121]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{indicator.value}</div>
                <div className="text-sm text-[#B0B0B0]">{indicator.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#2C2C2E] rounded-2xl p-8 hover:bg-[#2C2C2E]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-[#F2FE8D]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#F2FE8D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#212121]" />
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2C2C2E] rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Certified & Compliant
            </h3>
            <p className="text-[#B0B0B0]">
              Balanz meets the highest industry standards for security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-[#F2FE8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-[#212121]" />
                </div>
                <div className="font-bold text-white mb-2">{cert.name}</div>
                <div className="text-sm text-[#B0B0B0]">{cert.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-[#F2FE8D]/10 rounded-3xl p-8 border border-green-500/20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-green-400 font-bold text-xl">Our Security Promise</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Trust is Our Priority
            </h3>
            <p className="text-[#B0B0B0] mb-6 max-w-3xl mx-auto">
              We're committed to protecting your financial data with industry-leading security measures.
              Your information is encrypted, secure, and never shared without your explicit consent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-[#F2FE8D] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Learn More About Security
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-[#212121] transition-all duration-300">
                View Privacy Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
