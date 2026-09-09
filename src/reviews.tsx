import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';
import './index.css';

function ReviewsPage() {
  useEffect(() => {
    // Ensure SociableKIT widget scripts are loaded and executed
    const scripts = [
      'https://widgets.sociablekit.com/tripadvisor-reviews/widget.js',
      'https://widgets.sociablekit.com/google-reviews/widget.js',
    ];

    scripts.forEach((src) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (!existing) {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-[#38492e]/20 selection:text-stone-900" id="reviews-page-root">
      <Navigation activePage="reviews" />

      {/* Hero Header matching Welcome Page */}
      <section className="relative overflow-hidden w-full bg-stone-950 text-white min-h-[320px] md:min-h-[400px] flex items-center justify-center" id="reviews-hero-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/public/Images/hero.png"
            alt="Hanging Rock Kitchen Reviews"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            id="reviews-hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 space-y-6">
          <div className="space-y-3">
            <span className="text-[#8db379] font-sans text-xs font-bold tracking-[0.25em] uppercase block">
              Real people sharing real experiences
            </span>
            <h1 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight drop-shadow-lg">
              Reviews
            </h1>
            <p className="font-lora text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              See what people are saying about Hanging Rock Kitchen. Feel free to share your own experience with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Kept simple and exact to original content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12" id="reviews-content-container">

        {/* Section 1: Google Reviews */}
        <section className="bg-white border border-stone-200 shadow-sm p-6 sm:p-8 md:p-10 space-y-6" id="google-section">
          {/* Google Reviews Widget Container */}
          <div id="google-reviews-container" className="min-h-[140px] w-full">
            <div className="sk-ww-google-reviews" data-embed-id="25711028"></div>
          </div>
        </section>

        {/* Section 2: TripAdvisor Reviews */}
        <section className="bg-white border border-stone-200 shadow-sm p-6 sm:p-8 md:p-10 space-y-6" id="tripadvisor-section">
          {/* TripAdvisor Widget Container */}
          <div id="tripadvisor-reviews-container" className="min-h-[140px] w-full">
            <div className="sk-ww-tripadvisor-reviews" data-embed-id="25711009"></div>
          </div>
        </section>

      </main>

      <Footer activePage="reviews" />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ReviewsPage />
    </StrictMode>
  );
}
export default ReviewsPage;
