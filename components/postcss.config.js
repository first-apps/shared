const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  options: {
    from: "./src/**/*.css",
  },
  plugins: [
    tailwindcss("./tailwind.config.js"),
    autoprefixer({
      add: true,
    }),
  ],
};
