module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home-seccion1": "url('/seccion1background.jpg')", //
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        tajawal: ["Tajawal", "serif"],
      },
    },
  },
  plugins: [],
};
