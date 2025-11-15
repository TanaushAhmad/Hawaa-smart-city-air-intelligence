export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: "#0D0F1A",
        card: "#161A2A",
        primary: "#4C7DF0",
        secondary: "#7A5CFF",
        success: "#00D68F",
        warning: "#FFC857",
        danger: "#FF4F64",
        "text-primary": "#F0F3FF",
        "text-secondary": "#8A90A6",
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(76, 125, 240, 0.5)',
        'glow-secondary': '0 0 15px rgba(122, 92, 255, 0.5)',
        'glow-success': '0 0 15px rgba(0, 214, 143, 0.5)',
        'glow-warning': '0 0 15px rgba(255, 200, 87, 0.5)',
        'glow-danger': '0 0 15px rgba(255, 79, 100, 0.5)',
      }
    },
  },
  plugins: [],
}