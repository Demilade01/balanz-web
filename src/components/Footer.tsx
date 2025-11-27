import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Shield,
  Heart,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download", href: "#download" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" }
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/balanz" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/balanz" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/balanz" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/balanz" }
  ];

  const contactInfo = [
    { icon: Mail, text: "support@balanzafrica.site", href: "mailto:support@balanzafrica.site" },
    { icon: Phone, text: "+234 800 BALANZ", href: "tel:+234800225269" },
    { icon: MapPin, text: "Lagos, Nigeria", href: "#" }
  ];

  return (
    <footer className="bg-[#2C2C2E] border-t border-[#212121]">
      {/* Newsletter Section */}
      <div className="py-16 px-4 border-b border-[#212121]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35]">
                Balanz
              </span>
            </h3>
            <p className="text-[#B0B0B0] mb-8">
              Get the latest financial tips, app updates, and exclusive offers delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-[#212121] border border-[#2C2C2E] rounded-xl text-white placeholder-[#B0B0B0] focus:outline-none focus:border-[#F2FE8D] transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#F2FE8D] to-[#FF6B35] text-[#212121] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#F2FE8D]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#B0B0B0] mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <img src="/icon.png" alt="Balanz Logo" className="w-10 h-10" />
                </div>
                <span className="text-2xl font-bold text-white">Balanz</span>
              </div>

              {/* Description */}
              <p className="text-[#B0B0B0] leading-relaxed">
                The smart personal finance management app built specifically for Nigerians.
                Take control of your financial life with AI-powered insights and seamless bank integration.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-[#B0B0B0] hover:text-[#F2FE8D] transition-colors"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{contact.text}</span>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-[#212121] rounded-xl flex items-center justify-center text-[#B0B0B0] hover:text-[#F2FE8D] hover:bg-[#2C2C2E] transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#B0B0B0] hover:text-[#F2FE8D] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 px-4 border-t border-[#212121]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-[#B0B0B0] text-sm">
              <span>© 2025 Balanz. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Made in Nigeria</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-[#B0B0B0] hover:text-[#F2FE8D] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#B0B0B0] hover:text-[#F2FE8D] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-[#B0B0B0] hover:text-[#F2FE8D] transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-[#B0B0B0] text-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Bank-Level Security</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-8 px-4 bg-[#212121]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center space-x-8 text-[#B0B0B0] text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Available in Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🇳🇬</span>
                <span>Proudly Nigerian</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
