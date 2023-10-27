const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Modals": path.resolve(__dirname, "src/components/modals"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Assets": path.resolve(__dirname, "src/assets"),
    },
  },
};
