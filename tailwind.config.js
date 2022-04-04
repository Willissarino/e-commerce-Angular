module.exports = {
  content: [
  "./src/**/*.{html,ts}",
],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
