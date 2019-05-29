module.exports = {
  apps: [{
    name: "cdsinnova",
    script: "./index.js",
    watch: false,
    env: {
      "PLUGDO_GLOBAL_ENV": "prod",
      "PORT": 3400
    }
  }]
}
