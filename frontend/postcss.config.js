/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }), // keep this first
    require("autoprefixer")({
      /* ...options */
    }) // so imports are auto-prefixed too
  ]
};
