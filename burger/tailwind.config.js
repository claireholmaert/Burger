/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'yellow': '#ffc045',
      'yellow-hover': '#f5b029',
      'marron': '#3d2514',
      'marron-hover': '#231105',
      'red': '#bf2222',
      'red-hover': '#990e0e',
      'gray': '#f5f5f5',
      'black': '#1f2937',
      'carousel': '#dedede',
      'formulaire': '#9ca3af',
    },
    fontFamily: {
      'secondary': ["Alfa Slab One"],
      'button': ["Permanent Marker"],
      'paragraphe': ["Bebas Neue"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}