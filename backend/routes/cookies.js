const router = require('express').Router();


const {getAllCookie , getCookieById , createCookie, updateCookie, deleteCookie} =
 require('../controllers/cookieController');

// Routes
router.get('/', getAllCookie);
router.get('/:id', getCookieById);
router.post('/', createCookie);
router.put('/:id', updateCookie);
router.delete('/:id', deleteCookie);

module.exports = router;
