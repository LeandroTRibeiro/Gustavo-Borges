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
    },
  },
  plugins: [],
}
