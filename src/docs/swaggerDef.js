const config = require('../config/config');

var swaggerDef = {
        // openapi: '3.2.1' -> lỗi,
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.2.3',
        },
        servers: [
          {
            url: `http://localhost:${config.port}/api`,
          },
        ],
};

module.exports = swaggerDef;