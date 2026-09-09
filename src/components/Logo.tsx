import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: number; // width and height in px
  showText?: boolean;
}

export default function Logo({
  className = '',
  size = 56,
  showText: _showText = false,
}: LogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      id="hanging-rock-logo"
    >
      {!hasError ? (
        <img
          src="https://raw.githubusercontent.com/tylerthedog/Hanging-Rock-Kitchen/main/public/Images/logo.png"
          alt="Hanging Rock Kitchen Logo"
          className="w-full h-full object-contain rounded-full drop-shadow-xs"
          referrerPolicy="no-referrer"
          loading="eager"
          onError={() => setHasError(true)}
          id="logo-img"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-stone-900 border border-[#38492e]/40 flex items-center justify-center text-[#8db379] font-serif font-bold text-xs tracking-wider shadow-inner">
          HRK
        </div>
      )}
    </div>
  );
}
