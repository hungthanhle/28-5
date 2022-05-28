const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../docs/swaggerDef');

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['../docs/*.yml', '../routes/*.js'],
});
const options = {
  explorer: true,
}
router.use('/', swaggerUi.serve,swaggerUi.setup(specs, options));

/**
 * @swagger
 * /:
 *   get:
 *     description: Get all products.
 *     responses:
 *       "200":
 *         description: OK
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
router
  .route('/')
  .get(productController.getProducts);

/**
 * @swagger
 * /{id}:
 *   get:
 *     description: Get all products.
 *     responses:
 *       "200":
 *         description: OK
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *   put:
 *     description: Update a product.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               price:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               id: '0001'
 *               name: fake@example.com
 *               price: 123
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Product'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     description: Delete a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: No content
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
router
  .route('/:id')
  .get(productController.getProductById)
  .put(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;


