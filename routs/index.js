const express = require('express');
const router = express.Router();



const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/products', homeController.renderPro);
router.post('/products/create',homeController.create);
router.get('/products/:id',homeController.destroy);
router.get('/products/:id/update_quantity',homeController.update);



module.exports = router;
