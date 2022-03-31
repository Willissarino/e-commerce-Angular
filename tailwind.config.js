module.exports = {
  content: [
  "./src/**/*.{html,ts}",
],
  theme: {
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
