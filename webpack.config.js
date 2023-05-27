const path = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.resolve.extensions.push(".sass");

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
      include: path.resolve(__dirname, "src"),
    });

    return config;
  },
};
