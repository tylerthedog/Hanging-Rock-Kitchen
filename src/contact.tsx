import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ImageWithPlaceholder } from './components/ImagePlaceholder';
import { MapPin, Navigation as NavigationIcon, Sparkles, Phone, MessageCircle, ExternalLink, Clock } from 'lucide-react';
import './index.css';

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-[#38492e]/20 selection:text-stone-900" id="contact-page-root">
      <Navigation activePage="contact" />

      {/* Hero Header */}
      <section className="relative overflow-hidden w-full bg-stone-950 text-white flex items-center justify-center" id="contact-hero-section">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithPlaceholder
            src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/Site%20Images/Contact/3.png"
            alt="Hanging Rock Kitchen Contact"
            className="w-full h-full object-cover"
            loading="eager"
            id="contact-hero-image"
            placeholderLabel="Contact Hero Image"
            isBackground={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-6 sm:py-8 space-y-4">
          
          {/* WhatsApp Us & Call Us buttons moved to the top of the page */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-1" id="visit-top-action-buttons">
            <a
              href="https://wa.me/27798983481?text=Hi%20Gary%20%26%20Karen,%20I%20would%20like%20to%20book%20a%20table%20or%20order%20takeaway"
              target="_blank"
              rel="noopener noreferrer"
              id="top-contact-whatsapp-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+27798983481"
              id="top-contact-call-btn"
              className="flex-1 sm:flex-none sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="space-y-1.5 pt-1">
            <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight drop-shadow-lg">
              Visit Us
            </h1>
            <p className="font-lora text-stone-200 text-xs sm:text-sm leading-snug sm:leading-normal max-w-2xl mx-auto drop-shadow-sm">
              Check our opening times, give us a call or WhatsApp to book a table, order a takeaway, or just ask us a question, and tap the 'Get Directions' button if you're visiting us. We're looking forward to welcoming you!
            </p>
          </div>
        </div>
      </section>

      {/* Main content area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 space-y-8" id="contact-content-container">
        
        {/* Contact & Location Grid: Left = Opening times & Contact, Right = Location & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch" id="contact-main-grid">
          
          {/* Left Block: Opening times, WhatsApp & Call buttons, Public Holidays */}
          <section className="bg-white border border-stone-200 shadow-sm p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-4" id="opening-times-section">
            <div className="space-y-4">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="font-sans font-black text-2xl sm:text-3xl text-stone-900 uppercase tracking-tight flex items-center gap-2.5">
                  <Clock className="w-6 h-6 text-[#38492e] shrink-0" />
                  <span>Opening Times</span>
                </h2>
              </div>

              {/* Schedule listing */}
              <div className="space-y-2 text-xs sm:text-sm divide-y divide-stone-100" id="weekly-hours-list">
                <div className="flex items-center justify-between py-2">
                  <span className="font-sans font-semibold text-stone-900">Monday</span>
                  <span className="font-sans text-stone-400 font-medium px-2 py-0.5 bg-stone-100 text-xs">Closed</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-sans font-semibold text-stone-900">Tuesday</span>
                  <span className="font-sans text-stone-400 font-medium px-2 py-0.5 bg-stone-100 text-xs">Closed</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-sans font-semibold text-stone-900">Wednesday</span>
                  <span className="font-sans text-stone-400 font-medium px-2 py-0.5 bg-stone-100 text-xs">Closed</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-sans font-semibold text-stone-900">Thursday</span>
                  <span className="font-sans text-stone-400 font-medium px-2 py-0.5 bg-stone-100 text-xs">Closed</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 gap-1">
                  <span className="font-sans font-semibold text-stone-900">Friday</span>
                  <span className="font-sans text-stone-800 font-medium">
                    16:30 – 19:30 Sit-down <span className="text-[#38492e] font-semibold text-xs">(20:00 for Takeaways)</span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 gap-1">
                  <span className="font-sans font-semibold text-stone-900">Saturday</span>
                  <span className="font-sans text-stone-800 font-medium">
                    16:30 – 19:30 Sit-down <span className="text-[#38492e] font-semibold text-xs">(20:00 for Takeaways)</span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 gap-1">
                  <span className="font-sans font-semibold text-stone-900">Sunday</span>
                  <span className="font-sans text-stone-800 font-medium">
                    16:30 – 19:30 Sit-down <span className="text-[#38492e] font-semibold text-xs">(20:00 for Takeaways)</span>
                  </span>
                </div>
              </div>

              {/* Public Holidays Button */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/MPpUNXQjZrEhLtuy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="public-holidays-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#38492e]/30 hover:border-[#38492e] bg-[#38492e]/10 hover:bg-[#38492e]/20 text-[#38492e] font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors shadow-2xs text-center"
                >
                  <span>Check Public Holidays Open Times</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#38492e] shrink-0" />
                </a>
              </div>
            </div>

            {/* Direct Contact Buttons (WhatsApp and Call) */}
            <div className="pt-4 border-t border-stone-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/27798983481?text=Hi%20Gary%20%26%20Karen,%20I%20would%20like%20to%20book%20a%20table%20or%20order%20takeaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-[0.16em] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="tel:+27798983481"
                  id="contact-call-btn"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs font-bold uppercase tracking-[0.16em] transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </section>

          {/* Right Block: Location, Google Map Embed & Get Directions */}
          <section className="bg-white border border-stone-200 shadow-sm p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-4" id="location-directions-section">
            <div className="space-y-4">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="font-sans font-black text-2xl sm:text-3xl text-stone-900 uppercase tracking-tight flex items-center gap-2.5">
                  <MapPin className="w-6 h-6 text-[#38492e] shrink-0" />
                  <span>Location &amp; directions</span>
                </h2>
              </div>

              {/* Embedded Google Map */}
              <div className="border border-stone-200 overflow-hidden shadow-xs relative h-[280px] sm:h-[320px] w-full bg-stone-100" id="google-maps-embed-container">
                <iframe
                  title="Google Maps Location - Hanging Rock Kitchen"
                  src="https://maps.google.com/maps?q=Hanging+Rock+Kitchen,+440+Diagonal+Road,+Pringle+Bay,+7196&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Get Directions Button - Pre-fills destination in Google Maps */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Hanging+Rock+Kitchen,+440+Diagonal+Road,+Pringle+Bay,+7196"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-xs"
              >
                <NavigationIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Get directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5 shrink-0" />
              </a>
            </div>
          </section>

        </div>

        {/* Additional placeholder area preserved */}
        <div id="contact-additional-placeholder" className="max-w-2xl mx-auto">
          {/* Content will be added here in future steps */}
        </div>

      </main>

      <Footer activePage="contact" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>
);
