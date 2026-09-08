import React from 'react';
import { TabId } from '../types';
import { ShoppingBag, Calendar } from 'lucide-react';
import { ImageWithPlaceholder } from './ImagePlaceholder';

interface HomeSectionProps {
  setActiveTab?: (tab: TabId) => void;
}

export default function HomeSection({ setActiveTab: _setActiveTab }: HomeSectionProps) {
  return (
    <div className="flex flex-col pb-16 animate-fade-in font-sans text-stone-900 bg-white" id="home-section">
      {/* 1. HERO SECTION (Overhead Pizza flatlay with Welcome Intro text) */}
      <section className="relative overflow-hidden w-full bg-stone-950 text-white flex items-center justify-center" id="welcome-intro-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithPlaceholder
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Welcome/1.png"
            alt="Hanging Rock Kitchen Welcome"
            className="w-full h-full object-cover"
            loading="eager"
            id="welcome-hero-image"
            placeholderLabel="Welcome Hero Image"
            isBackground={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay: Welcome Section over image */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-10 md:py-12 space-y-4">
          <div className="space-y-2.5">
            <span className="text-[#38492e] font-sans text-xs font-bold tracking-[0.25em] uppercase block"></span>
            <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight drop-shadow-lg">
              Welcome to our kitchen
            </h1>
            <p className="font-lora text-stone-200 text-xs sm:text-sm leading-snug sm:leading-normal max-w-4xl mx-auto drop-shadow-sm space-y-1 sm:space-y-1.5">
              <span className="block">We afford ourselves a guiltless opportunity to source and secure local fire wood, free-range chickens, stone ground flour and the freshest produce available in the beautiful Overberg.</span>
              <span className="block">Desserts are simple with absolute satisfaction in mind.</span>
              <span className="block">We are open from 4:30pm especially for young families where they can enjoy a relaxed place to nourish themselves.</span>
              <span className="block">Our restaurant is very small, so please keep this in mind as booking is strongly recommended.</span>
              <span className="block">Fully licensed, specialising in locally sourced wines.</span>
              <span className="block">Our cappuccino and espresso with liqueur of your choice to keep that coffee company.</span>
              <span className="block">Our Rock GnT is a firm favourite; never a single!</span>
              <span className="block">Summertime requires a long cool Lemon Whisky soda.</span>
              <span className="block">Coffee soda just for fun: Double espresso, Lemon and Soda.</span>
              <span className="block pt-1">
                <span className="font-sans font-bold uppercase tracking-wider text-[#8db379] block text-[11px] sm:text-xs mb-0.5">Takeaway:</span>
                <span className="block">If its takeout you require, give us enough notice via WhatsApp and we will reply promptly with a pickup time.</span>
                <span className="block text-stone-300 text-[11px] sm:text-xs italic mt-0.5">The only item not available for takeout is our fresh fish.</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Dining Choice Section: Order Takeaway vs Book a Table */}
      <section className="w-full bg-white py-6 sm:py-8 flex items-center justify-center" id="dining-options-section">
        <div className="w-full max-w-3xl mx-auto px-2 sm:px-6 text-center">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <a
              href="https://wa.me/27798983481?text=Hi%2C%0A%0AI'd%20like%20to%20order%20a%20takeaway."
              target="_blank"
              rel="noopener noreferrer"
              id="order-takeaway-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-7 py-3 sm:py-4 bg-[#38492e] hover:bg-[#2c3a24] text-white font-sans text-[10px] sm:text-sm font-bold uppercase tracking-[0.05em] sm:tracking-[0.2em] shadow-lg hover:shadow-[#38492e]/30 transition-all transform hover:-translate-y-0.5 text-center"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Order Takeaway</span>
            </a>

            <a
              href="https://wa.me/27798983481?text=Hi%2C%0A%0AI'd%20like%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              id="book-table-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-7 py-3 sm:py-4 bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 font-sans text-[10px] sm:text-sm font-bold uppercase tracking-[0.05em] sm:tracking-[0.2em] shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Book a Table</span>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Image Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12" id="menu-section">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl bg-white border border-stone-200 shadow-sm overflow-hidden" id="menu-image-card">
            <ImageWithPlaceholder
              src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Menu/Hanging%20Rock%20Kitchen%20Menu%20(1).png"
              alt="Hanging Rock Kitchen Menu - Wood-fired pizza and seasonal offerings"
              className="w-full h-auto object-contain block mx-auto"
              loading="lazy"
              id="menu-display-image"
              placeholderLabel="Hanging Rock Kitchen Menu"
              placeholderSublabel="Wood-fired pizza and seasonal offerings"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
