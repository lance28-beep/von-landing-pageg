import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MessageCircle } from 'lucide-react';
import Profile from './img/profile_von.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '', // Updated to match the name attribute
    user_email: '', // Updated to match the name attribute
    user_phone: '', // Updated to match the name attribute
    user_message: '', // Updated to match the name attribute
  });

  const [focusedFields, setFocusedFields] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    user_message: false,
  });
  const [contactMessage, setContactMessage] = useState(''); // For success/error messages

  // Load EmailJS from CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS with your Public Key
      (window as any).emailjs.init('1MPWDzeALq9L05koW'); // Replace with your EmailJS Public Key
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    (window as any).emailjs
      .sendForm(
        'service_k7u88n9', // Replace with your EmailJS Service ID
        'template_xlr53ge', // Replace with your EmailJS Template ID
        e.target as HTMLFormElement,
        '1MPWDzeALq9L05koW' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          // Show success message
          setContactMessage('Message sent successfully ✅');

          // Clear message after 5 seconds
          setTimeout(() => {
            setContactMessage('');
          }, 5000);

          // Clear form fields
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_message: '',
          });
        },
        () => {
          // Show error message
          setContactMessage('Message not sent (service error) ❌');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field: string) => {
    setFocusedFields({
      ...focusedFields,
      [field]: true,
    });
  };

  const handleBlur = (field: string) => {
    if (!formData[field as keyof typeof formData]) {
      setFocusedFields({
        ...focusedFields,
        [field]: false,
      });
    }
  };

  return (
    <section className="py-16 bg-white" id="Contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 transition-all duration-300 ease-in-out transform hover:text-[#A4D037] hover:scale-105">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12">
            Have questions about our amphibious vehicles? Fill out the form below and our team will get back to you shortly.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Image Section */}
            <div className="hidden lg:block h-full">
              <img
                src={Profile}
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#A4D037] mb-2">Contact Us Today</h3>
                <p className="text-gray-600">
                  We have some special promo waiting for you. Schedule your on-site review and test car.
                </p>
              </div>

              <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                <div className="relative">
                  <div
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedFields.user_name || formData.user_name
                        ? 'top-1 text-sm text-[#A4D037]'
                        : 'top-1/2 transform -translate-y-1/2 text-gray-400'
                    }`}
                  >
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('user_name')}
                    onBlur={() => handleBlur('user_name')}
                    placeholder={focusedFields.user_name || formData.user_name ? '' : 'Your Name'}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#A4D037] transition-colors duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <div
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedFields.user_email || formData.user_email
                        ? 'top-1 text-sm text-[#A4D037]'
                        : 'top-1/2 transform -translate-y-1/2 text-gray-400'
                    }`}
                  >
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('user_email')}
                    onBlur={() => handleBlur('user_email')}
                    placeholder={focusedFields.user_email || formData.user_email ? '' : 'Your Email'}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#A4D037] transition-colors duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <div
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedFields.user_phone || formData.user_phone
                        ? 'top-1 text-sm text-[#A4D037]'
                        : 'top-1/2 transform -translate-y-1/2 text-gray-400'
                    }`}
                  >
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('user_phone')}
                    onBlur={() => handleBlur('user_phone')}
                    placeholder={focusedFields.user_phone || formData.user_phone ? '' : 'Your Phone'}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#A4D037] transition-colors duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <div
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedFields.user_message || formData.user_message
                        ? 'top-2 text-sm text-[#A4D037]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    <MessageCircle size={20} />
                  </div>
                  <textarea
                    name="user_message"
                    value={formData.user_message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('user_message')}
                    onBlur={() => handleBlur('user_message')}
                    placeholder={focusedFields.user_message || formData.user_message ? '' : 'Your Message'}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#A4D037] transition-colors duration-300 z-1"
                    required
                  ></textarea>
                </div>

                {/* Success/Error Message */}
                {contactMessage && (
                  <div
                    className={`text-center text-sm font-semibold ${
                      contactMessage.includes('✅') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {contactMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#A4D037] text-white py-3 rounded-lg hover:bg-[#7FA728] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;