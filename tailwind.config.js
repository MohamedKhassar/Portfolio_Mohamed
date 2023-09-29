/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/src/assets/dark-blue-memphis-blog-banner-template_53876-98946.jpg')",
        
      },
    },
    container:{
      center:"true"
    },
  },
  plugins: [],
}