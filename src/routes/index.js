const express = require('express');
const docsRoute = require('./docs.route');
const productRoute = require('./product.route');

const router = express.Router();

const defaultRoutes = [
    {
      path: '/product',
      route: productRoute,
    },
];

const devRoutes = [
    {
      path: '/docs',
      route: docsRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

devRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;