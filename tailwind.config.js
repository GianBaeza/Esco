import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home-seccion1": "url('/seccion1background.jpg')",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        tajawal: ["Tajawal", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".colorTexto": {
          color: "white",
        },
        ".colorTextoOpacity": {
          color: "#ffffffb3",
        },
      });
    },
  ],
});
