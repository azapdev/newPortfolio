/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FBFBFE',
        bgAlt: '#F3F4FA',
        card: '#FFFFFF',
        textPrimary: '#1F2430',
        textSecondary: '#6B7280',
        accentPrimary: '#2DA8A0',
        accentSecondary: '#FF8A65',
        success: '#4CAF7D',
        borderLight: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
