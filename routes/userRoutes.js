const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/userController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
router.post('/create', user_controller.user_create);
router.get('/:id', user_controller.user_get);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;