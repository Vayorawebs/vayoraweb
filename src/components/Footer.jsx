import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--vayora-bg-secondary)] border-t border-[var(--vayora-border-subtle)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={companyInfo.logo}
              alt="VAYORA_WEB"
              className="h-10 w-auto mb-4"
            />
            <p className="text-[var(--vayora-text-muted)] text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-[var(--vayora-text-muted)] text-sm">
              Transforming ideas into powerful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-[var(--vayora-text-muted)] text-sm">Website Development</li>
              <li className="text-[var(--vayora-text-muted)] text-sm">Logo & Brand Identity</li>
              <li className="text-[var(--vayora-text-muted)] text-sm">Domain & Hosting</li>
              <li className="text-[var(--vayora-text-muted)] text-sm">Maintenance & Support</li>
              <li className="text-[var(--vayora-text-muted)] text-sm">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center space-x-2 text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
              >
                <Mail size={16} />
                <span>{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center space-x-2 text-[var(--vayora-text-muted)] hover:text-[var(--vayora-accent-sage)] transition-colors text-sm"
              >
                <Phone size={16} />
                <span>{companyInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-[var(--vayora-text-muted)] text-sm">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--vayora-bg-elevated)] flex items-center justify-center text-[var(--vayora-text-muted)] hover:bg-[var(--vayora-accent-sage)] hover:text-[var(--vayora-bg-primary)] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--vayora-bg-elevated)] flex items-center justify-center text-[var(--vayora-text-muted)] hover:bg-[var(--vayora-accent-sage)] hover:text-[var(--vayora-bg-primary)] transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--vayora-border-subtle)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--vayora-text-muted)] text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-[var(--vayora-text-muted)] text-sm mt-2 md:mt-0">
              Built with passion by VAYORA WEB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;