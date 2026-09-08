import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ShoppingBag, Calendar } from 'lucide-react';
import { ImageWithPlaceholder } from './components/ImagePlaceholder';
import './index.css';

function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-[#38492e]/20 selection:text-stone-900" id="menu-page-root">
      <Navigation activePage="menu" />

      {/* Hero Header matching Welcome and Visit Us pages */}
      <section className="relative overflow-hidden w-full bg-stone-950 text-white flex items-center justify-center" id="menu-hero-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithPlaceholder
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Site%20Images/Welcome/Untitled%20design%20(7).png"
            alt="Hanging Rock Kitchen Menu"
            className="w-full h-full object-cover"
            loading="eager"
            id="menu-hero-image"
            placeholderLabel="Menu Hero Image"
            isBackground={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-6 sm:py-8 space-y-4">
          {/* Action Buttons: Order Takeaway / Book a Table at the top */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-1" id="menu-top-action-buttons">
            <a
              href="https://wa.me/27798983481?text=Hi%20Gary%2C%0A%0AI'd%20like%20to%20order%20a%20takeaway."
              target="_blank"
              rel="noopener noreferrer"
              id="menu-order-takeaway-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-[#38492e] hover:bg-[#2c3a24] text-white font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] shadow-lg hover:shadow-[#38492e]/30 transition-all transform hover:-translate-y-0.5 text-center"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Order Takeaway</span>
            </a>

            <a
              href="https://wa.me/27798983481?text=Hi%20Gary%2C%0A%0AI'd%20like%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              id="menu-book-table-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Book a Table</span>
            </a>
          </div>

          <div className="space-y-1.5 pt-1">
            <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight drop-shadow-lg">
              Our Menu
            </h1>
            <p className="font-lora text-stone-200 text-xs sm:text-sm leading-snug sm:leading-normal max-w-2xl mx-auto drop-shadow-sm">
              Handcrafted wood-fired pizzas, fresh starters, and comforting desserts made with stoneground flour and seasonal Overberg produce.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area - Full Menu Graphic */}
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10" id="menu-content-container">
        <div className="flex flex-col items-center justify-center space-y-6" id="menu-image-wrapper">
          <div className="w-full max-w-2xl bg-white border border-stone-200 shadow-sm overflow-hidden" id="menu-image-card">
            <ImageWithPlaceholder
              src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Site%20Images/Welcome/Hanging%20Rock%20Kitchen%20Menu%20(1).png"
              alt="Hanging Rock Kitchen Menu - Wood-fired pizza and seasonal offerings"
              className="w-full h-auto object-contain block mx-auto"
              loading="eager"
              id="menu-display-image"
              placeholderLabel="Hanging Rock Kitchen Menu"
              placeholderSublabel="Wood-fired pizza and seasonal offerings"
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
