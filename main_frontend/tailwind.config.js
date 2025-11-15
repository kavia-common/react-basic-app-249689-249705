/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Lighter brand palette - improved readability while maintaining dark blue + purple aesthetic
        brand: {
          background: '#0e1b3a',      // Lighter base background
          surface: '#142550',          // Lighter surface for cards
          primary: '#3349a6',          // Softened blue
          primaryAccent: '#4f6ad6',    // Lighter blue accent
          purple: '#7c3aed',           // Rich purple
          purpleAccent: '#a78bfa',     // Light purple accent
          text: '#e6ebff',             // High contrast text
          textMuted: '#b9c3ff'         // Muted text with good contrast
        },
        // Legacy colors maintained for compatibility
        'primary-darkest': '#0e1b3a',
        'primary-darker': '#1e3a8a',
        'primary-dark': '#1e40af',
        'primary': '#3349a6',
        'primary-light': '#4f6ad6',
        // Purple palette
        'secondary-dark': '#7c3aed',
        'secondary': '#8b5cf6',
        'secondary-light': '#a78bfa',
        'secondary-lighter': '#c4b5fd',
        // Status colors
        'status-pending': '#f59e0b',
        'status-processing': '#3b82f6',
        'status-shipped': '#8b5cf6',
        'status-delivered': '#10b981',
        'status-cancelled': '#ef4444',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e3a8a 0%, #0e1b3a 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
        'gradient-card': 'linear-gradient(145deg, #142550 0%, #1e3a8a 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-purple': '0 4px 20px rgba(124, 58, 237, 0.3)',
        'glow-blue': '0 4px 20px rgba(79, 106, 214, 0.3)',
      },
      animation: {
        'gradient-drift': 'gradient-drift 15s ease infinite',
        'blob-float': 'blob-float 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'grid-glow': 'grid-glow 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-drift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%'
          },
        },
        'blob-float': {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.5'
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)',
            opacity: '0.6'
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
            opacity: '0.4'
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
          },
        },
        'grid-glow': {
          '0%, 100%': { 
            opacity: '0.3'
          },
          '50%': { 
            opacity: '0.6'
          },
        },
      },
    },
  },
  plugins: [],
}
