var dest = "./public";

module.exports = {
  browserSync: {
    proxy: 'localhost:3000',
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ],
    open: false
  },
  sass: {
    src: "./assets/sass/*.{sass,scss}",
    dest: dest
  },
  images: {
    src: "assets/images/**",
    dest: dest + "/images"
  },
  browserify: {
    src: './app/components',
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.js', '.es6'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './app/components/index.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  }
};
