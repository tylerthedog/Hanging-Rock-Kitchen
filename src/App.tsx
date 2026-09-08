/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col justify-between selection:bg-[#38492e]/20 selection:text-stone-900 font-sans">
      {/* Top Header & Sticky Navigation */}
      <Navigation activePage="welcome" />

      {/* Main Page Area */}
      <main className="flex-1">
        <HomeSection />
      </main>

      {/* Minimal Craft Footer */}
      <Footer activePage="welcome" />
    </div>
  );
}
