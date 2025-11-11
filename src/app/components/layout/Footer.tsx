import { Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'The Patient Journey', href: '/journey' },
    { name: 'About Us', href: '/about' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const topServices = [
    { name: 'Plastic Surgery', href: '/services/rhinoplasty' },
    { name: 'Hair Transplant', href: '/services/hair-transplant' },
    { name: 'Obesity Surgery', href: '/services/obesity-surgery' },
    { name: 'Cosmetic Dentistry', href: '/services' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-brand-dark text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 mb-4 shadow-lg">
              <Link href="/" className="relative block h-24 w-full" aria-label="Link to Homepage">
                <Image
                  src="/logo-main.png"
                  alt="Get Beauty and Health - Medical Tourism Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority
                />
              </Link>
            </div>
            <p className="text-sm font-inter leading-relaxed text-gray-300">
              Your trusted partner for world-class medical tourism in Turkey. 
              Connecting you to JCI-accredited hospitals, board-certified surgeons, 
              and comprehensive care packages at 60-80% savings.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-lora font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm hover:text-brand-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-lora font-semibold text-white">
              Top Services
            </h4>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="font-inter text-sm hover:text-brand-dark transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-lora font-semibold text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              {/* --- UPDATED: Address --- */}
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <p className="font-inter text-sm">
                  Avenida Acapulco 17, Local 7<br />
                  29640 Fuengirola - Málaga, Spain
                </p>
              </div>
              {/* --- UPDATED: UK Phone --- */}
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-teal flex-shrink-0" />
                <p className="font-inter text-sm">+44 7359 104606 (UK)</p>
              </div>
              {/* --- UPDATED: US Phone --- */}
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-teal flex-shrink-0" />
                <p className="font-inter text-sm">+1 630 201 3340 (US)</p>
              </div>
              {/* --- UPDATED: Email --- */}
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-teal flex-shrink-0" />
                <p className="font-inter text-sm">info@getbeautyandhealth.com</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="pt-2">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-2 rounded-full bg-gray-700 hover:bg-brand-dark transition-colors duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="font-inter text-sm">
              &copy; 2025 Get Beauty and Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="font-inter text-sm hover:text-brand-dark transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="font-inter text-sm hover:text-brand-dark transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
