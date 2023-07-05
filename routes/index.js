const express = require('express');

// Setup router
const router = express.Router();

// Setting path for controller function
const homeController = require('../controllers/home_controller');

console.log('router loaded');

// Setting controller function to a route
router.get('/', homeController.home);

// Route all requests starting with '/actions' to actions.js file
router.use('/action', require('./actions'));

// Exporting router
module.exports = router;