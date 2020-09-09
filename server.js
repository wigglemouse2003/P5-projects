var liveServer = require("live-server");

var params = {
  port: 8080, // Set the server port. Defaults to 8080.
  host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  // root: "/creations", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  //   file: "/creations/phi-creature/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);
