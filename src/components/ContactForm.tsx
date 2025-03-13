import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MessageCircle, Send, Loader2, MapPin, Clock, Shield, CheckCircle2, MessageSquare, CreditCard, UserCheck, Bell, Car, Tag, ThumbsUp, Star, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedList } from './ui/animated-list';
import Profile from './img/profile_von.png';

interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_message: string;
}

const Notification = ({ name, description, icon, color, time }: {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  time: string;
}) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white/90 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-full shadow-md"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-base">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: '',
  });

  const [focusedFields, setFocusedFields] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    user_message: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      (window as any).emailjs.init('1MPWDzeALq9L05koW');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await (window as any).emailjs.sendForm(
        'service_k7u88n9',
        'template_xlr53ge',
        e.target as HTMLFormElement,
        '1MPWDzeALq9L05koW'
      );

      setContactMessage('Message sent successfully ✅');
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_message: '',
      });

      setTimeout(() => setContactMessage(''), 5000);
    } catch (error) {
      setContactMessage('Message not sent (service error) ❌');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFocus = (field: keyof typeof focusedFields) => {
    setFocusedFields(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: keyof typeof focusedFields) => {
    if (!formData[field]) {
      setFocusedFields(prev => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const notifications = [
    {
      name: "New Arrival",
      description: "2020 Toyota HiAce GL Grandia Japan Surplus",
      time: "2m ago",
      icon: <Car className="w-5 h-5 text-white" />,
      color: "#1E86FF",
    },
    {
      name: "Price Inquiry",
      description: "For Mitsubishi L300 FB Exceed Japan Surplus",
      time: "5m ago",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      color: "#FF3D71",
    },
    {
      name: "Limited Promo",
      description: "20% off on all Suzuki Multi-Cab units",
      time: "10m ago",
      icon: <Tag className="w-5 h-5 text-white" />,
      color: "#FFB800",
    },
    {
      name: "Payment Confirmed",
      description: "For Nissan Urvan NV350 Premium Japan Surplus",
      time: "15m ago",
      icon: <CreditCard className="w-5 h-5 text-white" />,
      color: "#00C9A7",
    },
    {
      name: "Customer Recommendation",
      description: "Toyota TownAce for small business owners",
      time: "20m ago",
      icon: <ThumbsUp className="w-5 h-5 text-white" />,
      color: "#A4D037",
    },
    {
      name: "5-Star Review",
      description: "Honda Odyssey Japan Surplus delivery experience",
      time: "25m ago",
      icon: <Star className="w-5 h-5 text-white" />,
      color: "#7FA728",
    },
    {
      name: "Financing Approved",
      description: "For Isuzu Elf Dropside Japan Surplus",
      time: "30m ago",
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      color: "#6C5CE7",
    },
    {
      name: "Test Drive Scheduled",
      description: "For Toyota Coaster Mini Bus Japan Surplus",
      time: "35m ago",
      icon: <Calendar className="w-5 h-5 text-white" />,
      color: "#FD79A8",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="Contact">
      {/* Cool animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/60 to-[#A4D037]/10 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#A4D037]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#1E86FF]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FFB800]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-[#A4D037]/10 text-[#A4D037] font-semibold text-sm uppercase tracking-wider mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Have questions about our Japan surplus vehicles? Fill out the form below and our team will get back to you shortly.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Animated Messages List */}
            <div className="lg:col-span-1">
              <div className="relative flex h-[500px] w-full flex-col overflow-hidden p-2">
                <AnimatedList 
                  className="flex flex-col-reverse space-y-0 space-y-reverse gap-4" 
                  delay={2000} 
                  maxItems={6}
                >
                  {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                  ))}
                </AnimatedList>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/80 backdrop-blur-sm"></div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/80 backdrop-blur-sm"></div>
              </div>
            </div>

            {/* Form Section */}
            <motion.div 
              className="lg:col-span-2 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30 hover:bg-white/90 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'phone', 'message'].map((field) => (
                  <motion.div 
                    key={field}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ['name', 'email', 'phone', 'message'].indexOf(field) * 0.1 }}
                  >
                    <div
                      className={`absolute left-3 transition-all duration-300 ${
                        focusedFields[`user_${field}` as keyof typeof focusedFields] || formData[`user_${field}` as keyof FormData]
                          ? 'top-2 text-sm text-[#A4D037]'
                          : 'top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#A4D037]'
                      }`}
                    >
                      {field === 'name' && <User size={20} />}
                      {field === 'email' && <Mail size={20} />}
                      {field === 'phone' && <Phone size={20} />}
                      {field === 'message' && <MessageCircle size={20} />}
                    </div>
                    {field === 'message' ? (
                      <textarea
                        name={`user_${field}`}
                        value={formData[`user_${field}` as keyof FormData]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(`user_${field}` as keyof typeof focusedFields)}
                        onBlur={() => handleBlur(`user_${field}` as keyof typeof focusedFields)}
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/70 focus:outline-none focus:border-[#A4D037] focus:ring-2 focus:ring-[#A4D037]/20 transition-all duration-300 group-hover:border-[#A4D037]/50"
                        required
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        name={`user_${field}`}
                        value={formData[`user_${field}` as keyof FormData]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(`user_${field}` as keyof typeof focusedFields)}
                        onBlur={() => handleBlur(`user_${field}` as keyof typeof focusedFields)}
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/70 focus:outline-none focus:border-[#A4D037] focus:ring-2 focus:ring-[#A4D037]/20 transition-all duration-300 group-hover:border-[#A4D037]/50"
                        required
                      />
                    )}
                  </motion.div>
                ))}

                <AnimatePresence>
                  {contactMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`text-center p-4 rounded-xl backdrop-blur-sm ${
                        contactMessage.includes('✅')
                          ? 'bg-green-50/80 text-green-600 border border-green-200/70'
                          : 'bg-red-50/80 text-red-600 border border-red-200/70'
                      }`}
                    >
                      {contactMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#A4D037] to-[#7FA728] text-white py-4 rounded-xl font-semibold 
                    flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#A4D037]/20 
                    focus:outline-none focus:ring-2 focus:ring-[#A4D037]/50 transition-all duration-300
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;