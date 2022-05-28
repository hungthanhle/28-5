const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../docs/swaggerDef');

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['../docs/*.yml', '../routes/*.js'],
});
const options = {
  explorer: true,
}
/**
 * @swagger
 * /:
 *   get:
 *     description: Test hay gì?.
 *     responses:
 *       "200":
 *         description: OK
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
router.use('/', swaggerUi.serve,swaggerUi.setup(specs, options));

module.exports = router;