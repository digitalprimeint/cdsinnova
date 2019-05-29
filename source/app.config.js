const setting = {
  dev: {
    security: {
      rateLimit: {
        active: false,
        period: 1,
        limit: 20
      },
      header: {
        active: false
      },
      origin: {
        active: false,
        domains: ['*']
      }
    }
  },
  prod: {
    security: {
      rateLimit: {
        active: false,
        period: 1,
        limit: 20
      },
      header: {
        active: true
      },
      origin: {
        active: false,
        domains: ['*']
      }
    }
  }
}

exports.settings = function () {
  return setting;
};