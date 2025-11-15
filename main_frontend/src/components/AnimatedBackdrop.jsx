import React from 'react';

/**
 * Animated backdrop component providing modern background effects
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Background variant: 'gradientBlobs' or 'gridGlow'
 * @param {string} props.className - Additional CSS classes
 * 
 * @example
 * <AnimatedBackdrop variant="gradientBlobs" />
 * 
 * @compliance
 * - Performance: CSS-only animations, no heavy libraries
 * - Accessibility: Respects prefers-reduced-motion
 * - Design: Maintains content readability with low opacity
 */
// PUBLIC_INTERFACE
const AnimatedBackdrop = ({ variant = 'gradientBlobs', className = '' }) => {
  if (variant === 'gridGlow') {
    return (
      <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-primary-darker to-brand-surface" />
        
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-glow 8s ease-in-out infinite'
          }}
        />
        
        {/* Radial glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primaryAccent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
    );
  }

  // Default: gradientBlobs variant
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Base gradient background with animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-background via-primary-darker to-brand-surface"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-drift 15s ease infinite'
        }}
      />
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        {/* Purple blob top-left */}
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
            animation: 'blob-float 20s ease-in-out infinite'
          }}
        />
        
        {/* Blue blob top-right */}
        <div 
          className="absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(79, 106, 214, 0.4) 0%, transparent 70%)',
            animation: 'blob-float 25s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        
        {/* Purple blob bottom-right */}
        <div 
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
            animation: 'blob-float 22s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
        
        {/* Blue blob bottom-left */}
        <div 
          className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(51, 73, 166, 0.4) 0%, transparent 70%)',
            animation: 'blob-float 18s ease-in-out infinite reverse',
            animationDelay: '6s'
          }}
        />
      </div>
      
      {/* Noise texture overlay for depth (subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
