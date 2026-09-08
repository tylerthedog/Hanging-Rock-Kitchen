import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types';

interface NavigationProps {
  activePage?: PageId;
  activeTab?: string;
}

export default function Navigation({ activePage, activeTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize current page (supports both activePage or legacy activeTab)
  const current: PageId = activePage || (activeTab === 'home' ? 'welcome' : (activeTab as PageId)) || 'welcome';

  const navItems: { id: PageId; label: string; href: string }[] = [
    { id: 'welcome', label: 'Welcome', href: 'index.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs" id="main-navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo Brand left side */}
          <a
            href="index.html"
            className="flex items-center gap-3.5 group focus:outline-hidden"
            id="nav-logo-link"
          >
            <Logo size={56} showText={false} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="text-left">
              <span className="block font-serif text-lg md:text-xl font-bold tracking-tight text-stone-800 group-hover:text-stone-600 transition-colors duration-300">
                Hanging Rock Kitchen
              </span>
              <span className="block font-serif text-[10px] md:text-xs tracking-widest text-[#8D7B68] italic group-hover:text-[#38492e] transition-colors">
                Wood Fired Pizza & Love
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3" id="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = current === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`nav-item-${item.id}`}
                  className={`px-4 py-2 text-xs lg:text-sm font-serif tracking-wider rounded-xs transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#38492e] font-medium'
                      : 'text-stone-700/75 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#38492e] rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-800 hover:bg-stone-100 focus:outline-hidden cursor-pointer"
              aria-expanded={isOpen}
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-fade-in" id="mobile-nav-panel">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = current === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`mobile-nav-item-${item.id}`}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-serif tracking-wide transition-colors ${
                    isActive
                      ? 'bg-stone-100 text-[#38492e] font-medium'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
