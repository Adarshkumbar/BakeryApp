const ingredientModel = require('../models/ingredientModel');

const getIngredients = async (req, res) => {
  const ingredients = await ingredientModel.find({});
  res.json(ingredients);
};

const createIngredient = async (req, res) => {
  const ingredient = req.body;
  const createdIngredient = await ingredientModel.create(ingredient);
  res.status(201).json(createdIngredient);
};

const updateIngredient = async (req, res) => {
  const { id } = req.params;
  const ingredient = req.body;
  const updatedIngredient = await ingredientModel.findByIdAndUpdate(id, ingredient, {
    new: true,
  });
  res.json(updatedIngredient);
};

const deleteIngredient = async (req, res) => {  
  const { id } = req.params;
  await ingredientModel.findByIdAndDelete(id);
  res.json({ message: 'ingredient deleted successfully' });
};

module.exports = { getIngredients, createIngredient, updateIngredient, deleteIngredient };
