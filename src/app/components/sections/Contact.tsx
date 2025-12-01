'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'juniormsyoka35@gmail.com',
      href: 'mailto:juniormsyoka35@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 748 579 736',
      href: 'tel:+2547XXXXXXXXX',
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-colors"
              >
                <div className="p-3 rounded-lg bg-blue-900/30">
                  <info.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Availability */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800">
            <h4 className="font-bold text-lg mb-4">Current Availability</h4>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse mr-3" />
              <span className="text-gray-300">Open for freelance projects</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              I'm currently available for contract work, freelance projects,
              and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center ${
                isSubmitted
                  ? 'bg-green-600'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              I typically respond within 24 hours. For urgent matters, please include
              "URGENT" in your message subject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;