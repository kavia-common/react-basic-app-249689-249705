/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark blue palette
        'primary-darkest': '#0B1220',
        'primary-darker': '#1E3A8A',
        'primary-dark': '#1E40AF',
        'primary': '#2563EB',
        'primary-light': '#3B82F6',
        // Purple palette
        'secondary-dark': '#7C3AED',
        'secondary': '#8B5CF6',
        'secondary-light': '#A78BFA',
        'secondary-lighter': '#C4B5FD',
        // Status colors
        'status-pending': '#F59E0B',
        'status-processing': '#3B82F6',
        'status-shipped': '#8B5CF6',
        'status-delivered': '#10B981',
        'status-cancelled': '#EF4444',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E3A8A 0%, #0B1220 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
        'gradient-card': 'linear-gradient(145deg, #1E3A8A 0%, #1E40AF 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
