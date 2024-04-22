const router = require('express').Router();


const {getAutomatic , putAutomatic } =
 require('../controllers/autoCalcController');

// Routes
router.get('/', getAutomatic);
router.put('/', putAutomatic);

module.exports = router;
