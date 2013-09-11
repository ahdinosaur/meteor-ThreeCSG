Package.describe({
  summary: "CSG plugin for Three.js"
});

Package.on_use(function (api) {
  api.add_files('lib/ThreeCSG/ThreeCSG.js', 'client');
  // FIXME export sets ThreeBSP to be undefined
  // i'm confused..
  //api.export && api.export('ThreeBSP', 'client');
});
