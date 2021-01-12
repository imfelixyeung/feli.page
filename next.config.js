const withWorkbox = require("next-with-workbox");
module.exports = withWorkbox({
    workbox: {
        // .
        // ..
        // ... any workbox-webpack-plugin.GenerateSW option
        skipWaiting: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 5000000,
    },
    // .
    // ..
    // ... other Next.js config values
});
