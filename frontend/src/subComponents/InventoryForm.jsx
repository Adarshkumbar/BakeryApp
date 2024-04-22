import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ name, quantity });
      // Reset form fields after successful submission
      setName('');
      setQuantity('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="costPerUnit">Cost Per Unit:</label>
        <input type="number" id="cost" value={costPerUnit} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
