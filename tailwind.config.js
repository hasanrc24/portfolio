/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#111418",
        "img-border": "#343a40",
        "brand-color": "#20c997",
        "about-bg": "#212529",
        "services-bg": "#343a40",
        "text-color": "#6d7072",
        "modal-color": "#343a40",
        "modal-out-bg": "#212529",
        "modal-text": "#dee3e4",
      },
      backgroundImage: {
        "bg-image":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../public/images/background.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "input-shadow": "0 0 5px rgb(128, 189, 255, 50%)",
      },
    },
  },
  plugins: [],
  important: true,
};
