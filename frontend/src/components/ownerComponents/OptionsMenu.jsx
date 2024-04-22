import React, { useState } from 'react';
import axios from 'axios';
import { FaDumpster, FaCheck } from 'react-icons/fa';

const OptionsMenu = ({ updatedItem: initialItem, handleChange, ingredientId, onUpdate, onDelete }) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/ingredients/${ingredientId}`, updatedItem);
      onUpdate();
    } catch (error) {
      console.error('Error updating item:', error);
    }
    console.log("🎃",updatedItem);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/ingredients/${ingredientId}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Name"
        value={updatedItem.name || ''}
        onChange={(e) => {
          handleChange(e, 'name');
          setUpdatedItem({ ...updatedItem, name: e.target.value }); // Update the local state
        }}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
        style={{ width: '100px' }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={updatedItem.quantity || ''}
        onChange={(e) => {
          handleChange(e, 'quantity');
          setUpdatedItem({ ...updatedItem, quantity: e.target.value }); // Update the local state
        }}
        className="border border-gray-300 rounded-md px-2 py-2 mb-2"
        style={{ width: '100px' }}
      />
      <input
        type="number"
        placeholder="Cost/Ut"
        value={updatedItem.costPerUnit || ''}
        onChange={(e) => {
          handleChange(e, 'costPerUnit');
          setUpdatedItem({ ...updatedItem, costPerUnit: e.target.value }); // Update the local state
        }}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
        style={{ width: '100px' }}
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ml-2"
        style={{ width: '60px' }}
      >
        <FaCheck />
      </button>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <FaDumpster />
      </button>
    </div>
  );
};

export default OptionsMenu;
