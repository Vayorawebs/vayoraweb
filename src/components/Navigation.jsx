import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/mock';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'max-w-md rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-[#333] shadow-2xl py-4 px-4'
            : isScrolled 
              ? 'max-w-3xl rounded-full nav-blur border border-[var(--vayora-border-subtle)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] py-2 px-6' 
              : 'max-w-7xl rounded-full bg-transparent border border-transparent py-4 px-2'
        }`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--vayora-accent-sage)] transition-colors">
              VAYORA<span className="text-[var(--vayora-accent-sage)]">.WEB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[var(--vayora-accent-sage)]'
                    : 'text-[var(--vayora-text-muted)] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full text-sm font-bold bg-white text-black hover:bg-[var(--vayora-accent-sage)] transition-colors shadow-lg ml-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mt-4 pt-4 border-t border-[var(--vayora-border-subtle)]"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-[var(--vayora-accent-sage)]'
                        : 'text-[var(--vayora-text-secondary)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-sage block text-center mt-4 w-full"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navigation;