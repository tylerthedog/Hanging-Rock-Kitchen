import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ShoppingBag, Calendar } from 'lucide-react';
import './index.css';

function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-[#38492e]/20 selection:text-stone-900" id="menu-page-root">
      <Navigation activePage="menu" />

      {/* Hero Header matching Welcome Page */}
      <section className="relative overflow-hidden w-full bg-stone-950 text-white min-h-[340px] md:min-h-[420px] flex items-center justify-center" id="menu-hero-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Menu/3.png"
            alt="Hanging Rock Kitchen Menu"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            id="menu-hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 space-y-6">
          <div className="space-y-3">
            <span className="text-[#8db379] font-sans text-xs font-bold tracking-[0.25em] uppercase block">
              Eat in &bull; Take out
            </span>
            <h1 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight drop-shadow-lg">
              Menu
            </h1>
            <p className="font-lora text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Our menu is handcrafted with seasonal local produce and love, all prepared in our wood-fired oven. Whether you're enjoying your meal in the warm atmosphere here with us or eating in the comfort of your own home, we guarantee the very best!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" id="menu-content-container">
        <div className="flex flex-col items-center justify-center space-y-8" id="menu-image-wrapper">
          {/* Action Buttons: Order Now & Book a Table (WhatsApp) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full" id="menu-action-buttons">
            <a
              href="https://wa.me/27798983481?text=Hi%20Gary%2C%0A%0AI'd%20like%20to%20order%20a%20takeaway."
              target="_blank"
              rel="noopener noreferrer"
              id="menu-order-takeaway-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#38492e] hover:bg-[#2c3a24] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-[#38492e]/30 transition-all transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Takeaway</span>
            </a>

            <a
              href="https://wa.me/27798983481?text=Hi%20Gary%2C%0A%0AI'd%20like%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              id="menu-book-table-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </a>
          </div>

          <div className="w-full max-w-2xl bg-white border border-stone-200 shadow-sm overflow-hidden" id="menu-image-card">
            <img
              src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Menu/Hanging%20Rock%20Kitchen%20Menu%20(1).png"
              alt="Hanging Rock Kitchen Menu - Wood-fired pizza and seasonal offerings"
              className="w-full h-auto object-contain block mx-auto"
              referrerPolicy="no-referrer"
              loading="eager"
              id="menu-display-image"
            />
          </div>
        </div>
      </main>

      <Footer activePage="menu" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>
);
