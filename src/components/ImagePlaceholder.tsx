import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  className?: string;
  aspect?: string;
  isBackground?: boolean;
}

export default function ImagePlaceholder({
  label = 'Image Placeholder',
  sublabel,
  className = '',
  isBackground = false,
}: ImagePlaceholderProps) {
  if (isBackground) {
    return (
      <div className={`absolute inset-0 z-0 bg-stone-900 overflow-hidden flex items-center justify-center ${className}`}>
        {/* Subtle decorative grid background pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #38492e 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        
        {/* Centered subtle watermark badge */}
        <div className="relative z-0 flex flex-col items-center justify-center gap-2 text-stone-600/80 p-6 text-center select-none pointer-events-none">
          <div className="w-12 h-12 rounded-full border border-stone-800 bg-stone-950/60 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-stone-500" />
          </div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
            {label}
          </span>
          {sublabel && (
            <span className="font-lora text-[11px] text-stone-600 max-w-xs">
              {sublabel}
            </span>
          )}
        </div>

        {/* Ambient vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full min-h-[160px] bg-stone-100 border border-stone-200 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group ${className}`}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#d6d3d1 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-2xs flex items-center justify-center text-stone-500 group-hover:text-[#38492e] transition-colors">
          <ImageIcon className="w-5 h-5" />
        </div>
        <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-stone-700 block">
          {label}
        </span>
        {sublabel ? (
          <span className="font-lora text-xs text-stone-500 line-clamp-2">
            {sublabel}
          </span>
        ) : (
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider bg-stone-200/70 px-2 py-0.5 rounded">
            Placeholder
          </span>
        )}
      </div>
    </div>
  );
}

export interface ImageWithPlaceholderProps extends React.ComponentPropsWithoutRef<'img'> {
  src?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  id?: string;
  placeholderLabel?: string;
  placeholderSublabel?: string;
  isBackground?: boolean;
}

export function ImageWithPlaceholder({
  src,
  alt,
  className = '',
  placeholderLabel,
  placeholderSublabel,
  isBackground = false,
  ...props
}: ImageWithPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <ImagePlaceholder
        label={placeholderLabel || alt || 'Image Placeholder'}
        sublabel={placeholderSublabel}
        className={className}
        isBackground={isBackground}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
