const express = require('express');
const { getproducts, getSingleProducts } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getproducts)
router.route('/product/:id').get(getSingleProducts)

module.exports = router;