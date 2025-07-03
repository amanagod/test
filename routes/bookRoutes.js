const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const bookCtrl = require('../controllers/bookController');

router.use(auth); // Protect all book routes

router.get('/', bookCtrl.getAll);
router.get('/:id', bookCtrl.getById);
router.post('/', bookCtrl.create);
router.put('/:id', bookCtrl.update);
router.delete('/:id', bookCtrl.remove);

module.exports = router;
