const router = require('express').Router();
const { getIngredients, createIngredient, updateIngredient, deleteIngredient } =
 require('../controllers/ingredientsController');

router.get('/', getIngredients);
router.post('/', createIngredient);
router.put('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);

module.exports = router;