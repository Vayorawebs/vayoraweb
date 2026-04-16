import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          subject: `New Service Inquiry: ${formData.service || "General"}`,
          message: formData.message,
        }),
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Could not send the message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--vayora-text-secondary)] max-w-3xl mx-auto">
            Let's discuss how we can elevate your digital presence
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Your Digital Aura
              </h2>
              <p className="text-[var(--vayora-text-secondary)] mb-8 leading-relaxed">
                Your business has potential. Your ideas have power. Your brand deserves to shine online. 
                Let's bring it to life — elegantly, creatively, and beautifully.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--vayora-accent-sage)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[var(--vayora-bg-primary)]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--vayora-accent-sage)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[var(--vayora-bg-primary)]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--vayora-accent-sage)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[var(--vayora-bg-primary)]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-[var(--vayora-text-muted)]">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={companyInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[var(--vayora-bg-secondary)] rounded-lg flex items-center justify-center text-[var(--vayora-text-muted)] hover:bg-[var(--vayora-accent-sage)] hover:text-[var(--vayora-bg-primary)] transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={companyInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[var(--vayora-bg-secondary)] rounded-lg flex items-center justify-center text-[var(--vayora-text-muted)] hover:bg-[var(--vayora-accent-sage)] hover:text-[var(--vayora-bg-primary)] transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[var(--vayora-text-secondary)] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border)] rounded-lg text-white focus:outline-none focus:border-[var(--vayora-accent-sage)] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--vayora-text-secondary)] mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border)] rounded-lg text-white focus:outline-none focus:border-[var(--vayora-accent-sage)] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[var(--vayora-text-secondary)] mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border)] rounded-lg text-white focus:outline-none focus:border-[var(--vayora-accent-sage)] transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[var(--vayora-text-secondary)] mb-2 font-medium">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border)] rounded-lg text-white focus:outline-none focus:border-[var(--vayora-accent-sage)] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-voice">AI Voice Call Agents</option>
                    <option value="ai-whatsapp">WhatsApp AI Automations</option>
                    <option value="website">Website Development</option>
                    <option value="logo">Logo & Brand Identity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[var(--vayora-text-secondary)] mb-2 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border)] rounded-lg text-white focus:outline-none focus:border-[var(--vayora-accent-sage)] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-sage flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="spinner mr-2"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2" size={18} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Business Hours
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h3 className="text-white font-semibold mb-2">Monday - Friday</h3>
                <p className="text-[var(--vayora-text-muted)]">9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Saturday - Sunday</h3>
                <p className="text-[var(--vayora-text-muted)]">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;