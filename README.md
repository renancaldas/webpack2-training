# webpack2-training

### Based on the video tutorial
#### https://www.youtube.com/watch?v=eWmkBNBTbMM&t=4727s

### Topics:
Video length / Description
- [12:30] Watching for file changes "- watch"
- [13:30] Creating a webpack.config.js
- [16:50] Live reload and hot module replacement plugin (run a dev server and auto push changes)
- [26:20] Environment variables (dev / prod)
- [30:50] Transpiling to es5 using webpack loader
- [42:00] Using ES6 code
- [44:00] Working with images
- [53:00] Tree shaking "dev code elimination" (removing not used modules)
- [58:30] Uglify (code minification)
- [01:02:30] Injecting environment variables into source code
- [01:05:45] Working with CSS
- [01:17:40] Bundling with unique file names (to avoid browser caching)
- [01:23:55] Code splitting / lazy loading (split bundle files for faster loading)
- [01:32:32] Side loading (use browser cached files instead of downloading again)
- [01:38:25] End of presentation with useful links

### Notes

- [56:20] Tree shaking only works on ES6 modules. Webpack 1 can't do tree shaking because it transpiles ES6 modules into CommonJS modules. For example, if you require lodash it will include all functions, even those not used. So, use lodash-es (es6 version) instead.

- [01:01:35] Uglify will remove things like "if (true)" statements

### Useful links

- List of plugins: http://webpack.github.io/docs/list-of-plugins.html
- List of loaders: http://webpack.github.io/docs/list-of-loaders.html
