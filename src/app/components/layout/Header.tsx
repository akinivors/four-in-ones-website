'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Services', href: '/services' },
    { name: 'The Patient Journey', href: '/journey' },
    { name: 'About Us', href: '/about' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-background shadow-md border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="relative block h-24 w-80" aria-label="Link to Homepage">
              <Image
                src="/logo-main.png"
                alt="Get Beauty and Health - Medical Tourism Logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            <ul className="flex space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-inter hover:text-brand-dark transition-colors duration-200 ${
                      scrolled ? 'text-brand-text' : 'text-gray-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Quick Contact & CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Quick Contact Icons */}
            <div className="flex items-center space-x-2">
              <a 
                href="tel:+447359104606"
                className={`p-2 rounded-full hover:bg-brand-teal hover:text-white transition-all duration-200 ${
                  scrolled ? 'text-brand-text' : 'text-gray-200'
                }`}
                aria-label="Call UK: +44 7359 104606"
                title="Call UK: +44 7359 104606"
              >
                <Phone size={18} />
              </a>
              <a 
                href="https://wa.me/447359104606"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full hover:bg-brand-teal hover:text-white transition-all duration-200 ${
                  scrolled ? 'text-brand-text' : 'text-gray-200'
                }`}
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            
            {/* CTA Button */}
            <Link href="/contact" className="bg-brand-orange text-white font-inter font-medium px-6 py-2 rounded-lg hover:brightness-110 hover:shadow-lg transition-all duration-200 inline-block">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 rounded-md hover:text-brand-dark transition-colors duration-200 ${
                scrolled ? 'text-brand-text' : 'text-gray-200'
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-brand-background">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative block h-20 w-64" aria-label="Link to Homepage">
                  <Image
                    src="/logo-main.png"
                    alt="Get Beauty and Health - Medical Tourism Logo"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                    priority
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-brand-text hover:text-brand-dark transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-2xl font-inter font-medium text-brand-text hover:text-brand-dark transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile CTA Button */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-brand-orange text-white font-inter font-medium px-6 py-4 rounded-lg text-lg hover:brightness-110 hover:shadow-lg transition-all duration-200 text-center"
                  >
                    Get a Free Quote
                  </Link>
                </div>

                {/* Mobile Quick Contact */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-inter text-brand-text mb-3">Quick Contact:</p>
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="tel:+447359104606"
                      className="flex items-center space-x-3 text-brand-text hover:text-brand-teal transition-colors"
                    >
                      <Phone size={20} className="text-brand-teal" />
                      <span className="font-inter">+44 7359 104606 (UK)</span>
                    </a>
                    <a 
                      href="tel:+16302013340"
                      className="flex items-center space-x-3 text-brand-text hover:text-brand-teal transition-colors"
                    >
                      <Phone size={20} className="text-brand-teal" />
                      <span className="font-inter">+1 630 201 3340 (US)</span>
                    </a>
                    <a 
                      href="https://wa.me/447359104606"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-brand-text hover:text-brand-teal transition-colors"
                    >
                      <MessageCircle size={20} className="text-brand-teal" />
                      <span className="font-inter">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
