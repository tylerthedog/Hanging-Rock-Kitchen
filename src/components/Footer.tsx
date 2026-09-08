import { Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  activePage?: PageId;
}

export default function Footer({ activePage: _activePage }: FooterProps) {
  return (
    <footer
      className="relative text-white border-t border-stone-900 py-12 px-4 sm:px-6 lg:px-8 mt-auto font-sans bg-black"
      id="page-footer"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        {/* Address & Phone Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-sm sm:text-base">
          <a
            href="https://maps.google.com/?q=440+Diagonal+Road,+Pringle+Bay,+7196"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-address-link"
            className="inline-flex items-center gap-2.5 text-stone-200 hover:text-[#38492e] transition-colors group"
            title="Open in Google Maps"
          >
            <MapPin className="w-4 h-4 text-[#38492e] group-hover:scale-110 transition-transform shrink-0" />
            <span className="font-medium underline decoration-stone-600 underline-offset-4 group-hover:decoration-[#38492e]">
              440 Diagonal Road, Pringle Bay, 7196
            </span>
          </a>

          <span className="hidden sm:inline text-stone-600">&bull;</span>

          <a
            href="tel:+27798983481"
            id="footer-phone-link"
            className="inline-flex items-center gap-2.5 text-stone-200 hover:text-[#38492e] transition-colors group"
            title="Call 079 898 3481"
          >
            <Phone className="w-4 h-4 text-[#38492e] group-hover:scale-110 transition-transform shrink-0" />
            <span className="font-medium font-sans">
              079 898 3481
            </span>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="pt-2 text-stone-400 text-xs sm:text-sm border-t border-stone-800 w-full max-w-md mx-auto">
          <p id="footer-copyright">
            &copy; 2026 Hanging Rock Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

