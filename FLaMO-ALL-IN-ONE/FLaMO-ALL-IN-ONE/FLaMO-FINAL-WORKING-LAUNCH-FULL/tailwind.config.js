module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonRed: '#FF0066',
      },
      backgroundImage: {
        'hero': "url('/src/assets/background.jpg')",
        'vibelock': "url('/src/assets/vibelock-bg.jpg')",
      },
    },
  },
  plugins: [],
}
