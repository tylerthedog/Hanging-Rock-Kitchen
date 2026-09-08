import React from 'react';
import { TabId } from '../types';
import { ShoppingBag, Calendar } from 'lucide-react';
import { ImageWithPlaceholder } from './ImagePlaceholder';

interface HomeSectionProps {
  setActiveTab?: (tab: TabId) => void;
}

export default function HomeSection({ setActiveTab: _setActiveTab }: HomeSectionProps) {
  return (
    <div className="flex-1 flex flex-col font-sans text-stone-900 bg-stone-950" id="home-section">
      {/* HERO SECTION (Overhead Pizza flatlay with Top Action Buttons and Welcome Intro text) */}
      <section className="relative overflow-hidden w-full flex-1 bg-stone-950 text-white flex items-center justify-center min-h-[calc(100vh-180px)] py-10 sm:py-14 md:py-16" id="welcome-intro-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithPlaceholder
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Site%20Images/Welcome/Untitled%20design%20(7).png"
            alt="Hanging Rock Kitchen Welcome"
            className="w-full h-full object-cover"
            loading="eager"
            id="welcome-hero-image"
            placeholderLabel="Welcome Hero Image"
            isBackground={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          
          {/* Order Takeaway / Book a Table buttons moved to the top above the blurb */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-5" id="welcome-top-action-buttons">
            <a
              href="https://wa.me/27798983481?text=Hi%2C%0A%0AI'd%20like%20to%20order%20a%20takeaway."
              target="_blank"
              rel="noopener noreferrer"
              id="order-takeaway-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3 sm:py-4 bg-[#38492e] hover:bg-[#2c3a24] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.18em] shadow-lg hover:shadow-[#38492e]/30 transition-all transform hover:-translate-y-0.5 text-center"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              <span>Order Takeaway</span>
            </a>

            <a
              href="https://wa.me/27798983481?text=Hi%2C%0A%0AI'd%20like%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              id="book-table-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3 sm:py-4 bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.18em] shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
            >
              <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              <span>Book a Table</span>
            </a>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight drop-shadow-lg leading-none">
              Welcome to Hanging Rock Kitchen
            </h1>
            
            <div className="font-lora text-stone-200 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-4xl mx-auto drop-shadow-sm space-y-3 sm:space-y-4 text-center">
              <p>
                Join us for dinner and make yourself at home at our small, relaxed restaurant in Pringle bay. We believe in good food that treats you well, and everything we cook is wood-fired in our oven. We take pride in sourcing stoneground flour, local firewood, free-range chickens, and the freshest seasonal produce our beautiful region has to offer.
              </p>
              <p>
                We open our doors at 4:30 PM, making us the perfect early-evening spot for young families looking for a relaxed, welcoming space to eat and unwind. Because our kitchen and dining room are uniquely small, tables fill up fast. We strongly recommend booking your spot in advance so we can save a seat for you!
              </p>
              <p>
                Our bar is fully licensed and features a handpicked selection of locally sourced wines. If you are looking for a house favorite, try our signature Rock GnT—and don't worry, it's never a single! In the summer, cool down with a refreshing Lemon Whisky Soda, or try our Coffee Soda - a double espresso, lemon, and soda. We also brew classic cappuccinos and espressos, served with your choice of liqueur to keep your coffee company.
              </p>
              <p>
                Be sure to save room for dessert. We keep them simple, satisfying, and designed with absolute comfort in mind.
              </p>
              
              <div className="pt-3 border-t border-stone-700/50">
                <span className="font-sans font-bold uppercase tracking-wider text-[#8db379] block text-sm sm:text-base mb-1.5">
                  Takeaway
                </span>
                <p className="mb-1.5">
                  We offer takeout for our menu, with the sole exception of our fresh fish, which is always best enjoyed straight from the kitchen.
                </p>
                <p className="text-stone-300">
                  To place a takeout order, simply send us a message via WhatsApp. Pre-orders are highly encouraged as our oven gets busy! We will reply promptly to confirm your pickup time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
