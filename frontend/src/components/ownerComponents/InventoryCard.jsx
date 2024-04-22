import React, { useState } from "react";

import InventoryCardItem from "./InventoryCardItem";
import OptionsMenu from "./OptionsMenu";
import { Link } from "react-router-dom";

const InventoryCard = ({ ingredients, onUpdate, onDelete }) => {
  const [updatedItem, setUpdatedItem] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleChange = (e, key) => {
    setUpdatedItem({ ...updatedItem, [key]: e.target.value });
  };

  const handleUpdate = () => {
    const { name, quantity } = updatedItem;
    if (!name || !quantity) {
      alert("Please provide both name and quantity.");
      return;
    }
    const itemToUpdate = { ...updatedItem, _id: selectedItemId };
    onUpdate(itemToUpdate); 
    setShowOptions(false);
    setUpdatedItem({});
  };

  const handleDelete = () => {
    onDelete(selectedItemId); 
    setShowOptions(false);
    updatedItem(!updatedItem)
  };

  const handleToggleOptions = (id) => {
    setShowOptions(!showOptions);
    setSelectedItemId(id);
  };

  return (
    <div className="container mx-auto">
      <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Inventory</h1>
            <Link to={"/"} className="ml-4 mt-[-4%] block bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 w-[140px] text-center font-bold mb-4">Go Back</Link>
        </div> 
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-14 justify-center">
        {ingredients.map((ingredient) => (
          <div key={ingredient._id} className="text-center">
            <InventoryCardItem
              ingredient={ingredient}
              onToggleOptions={() => handleToggleOptions(ingredient._id)}
              showOptions={showOptions && selectedItemId === ingredient._id}
            />
            {showOptions && selectedItemId === ingredient._id && (
              <OptionsMenu
                updatedItem={updatedItem}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                handleChange={handleChange}
                ingredientId={ingredient._id}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryCard;
