import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map(recipe => (
          <div key={recipe._id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <ul>
              {recipe.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{detail.ingredient}:</span>
                  <span>{detail.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
