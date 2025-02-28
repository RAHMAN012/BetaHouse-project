module.exports = {
    content: [      "./index.html",      "./src/**/*.{js,ts,jsx,tsx}",  ],
    content: ["./node_modules/flyonui/dist/js/accordion.js"],
    theme: {
      extend: {},
    },
    plugins: [
        require("flyonui"),
    ],
  };