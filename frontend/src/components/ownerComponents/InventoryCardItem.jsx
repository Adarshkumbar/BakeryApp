import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const InventoryCardItem = ({ ingredient, onToggleOptions, showOptions }) => {

  return (
    <div className="border p-4 rounded-md shadow-lg relative">
      <h2 className="text-xl font-semibold mb-2">{ingredient.name}</h2>
      <p>
        <strong>Quantity:</strong> {ingredient.quantity}
      </p>
      <p>
        <strong>Cost Per Unit:</strong> {ingredient.costPerUnit}
      </p>
      <button
        onClick={onToggleOptions}
        className="absolute top-2 right-2 text-gray-500"
      >
        {showOptions ? (
          <FaTimes style={{ color: 'red' }} />
        ) : (
          <FaPencilAlt />
        )}
      </button>
    </div>
  );
};

export default InventoryCardItem;
