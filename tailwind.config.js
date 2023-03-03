/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      color1: '#101820',
      color2: '#C99E66',
      color3: '#F6F6F7',
      color4: '#0F0F0F',
      color5: '#F0F0F0',
      color6: '#727278',
      color7: '#191D32',
      color8: '#FFFFFF',
      color9: '#E6E7EA',
      color10: '#E5E5E6',
      color11: '#202022',
      color12: '#101011',
      color13: '#C1C1C4',
    },
    screens: {
      'notebook': {'max': '1024px'},
      'notebook-s': {'max': '924px'},
      'tablet': {'max': '768px'},
      'mobile-xg': {'max': '551px'},
      'mobile-g': {'max': '425px'},
      'mobile-s': {'max': '300px'},
    },
    extend: {
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-in-out',
        'fadeInUp1': 'fadeInUp 1.0s ease-in-out',
        'fadeInUp2': 'fadeInUp 2.0s ease-in-out',
        'fadeInUp3': 'fadeInUp 3.0s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      }
    },
  },
  plugins: [],
}
