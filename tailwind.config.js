module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
    "./app/views/**/*.html.slim",
    "./app/javascript/**/*.tsx",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
    darkTheme: false,
  },
}