import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: portfolioData.social.linkedin, 
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    // { 
    //   name: 'Dribbble', 
    //   url: portfolioData.social.dribbble, 
    //   icon: Dribbble,
    //   color: 'hover:text-pink-600 dark:hover:text-pink-400'
    // },
    // { 
    //   name: 'Behance', 
    //   url: portfolioData.social.behance, 
    //   icon: Palette,
    //   color: 'hover:text-blue-500 dark:hover:text-blue-400'
    // },
    { 
      name: 'GitHub', 
      url: portfolioData.social.github, 
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">{portfolioData.personal.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110`}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 h-64 bg-gradient-to-br from-purple-100 to-teal-100 dark:from-purple-900/20 dark:to-teal-900/20 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-purple-600 dark:text-purple-400" size={48} />
                <p className="text-gray-600 dark:text-gray-300 font-semibold">Based in {portfolioData.personal.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Available for freelance projects worldwide</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up-delayed">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-500 dark:to-teal-500 hover:from-purple-700 hover:to-teal-700 dark:hover:from-purple-600 dark:hover:to-teal-600'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : submitStatus === 'success' ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-600 dark:text-green-400 font-semibold">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;