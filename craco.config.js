const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@heading-color": "#ffffff",
          "@text-color": "#ffffff",
          "@text-color-secondary": "#ffffff",
        },
      },
    },
  ],
};
