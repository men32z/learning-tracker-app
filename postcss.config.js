module.exports = {
  plugins: [
    /* eslint-disable-next-line */
    require('postcss-import'),
    /* eslint-disable-next-line */
    require('postcss-flexbugs-fixes'),
    /* eslint-disable-next-line */
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
