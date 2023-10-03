const express = require('express');
const router = express.Router();



const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/product', homeController.renderPro);
router.post('/product/create',homeController.create);
router.get('/product/:id',homeController.destroy);
router.get('/product/:id/update_quantity',homeController.update);



module.exports = router;