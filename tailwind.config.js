/** @type {import('tailwindcss').Config} */
module.exports = {

  // Richard can't get his VS Code Live server to serve up
  // any files in a subdirectory, so he's added an index.html
  // at the root of the project which he can get to work.
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
