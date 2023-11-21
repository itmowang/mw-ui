module.exports = {
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    "postcss-prefixwrap": {
      prefix: "mw-", // Add your desired prefix
    },
  },
};
