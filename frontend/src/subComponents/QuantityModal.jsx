import React, { useState } from "react";

const QuantityModal = ({ data, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || (!isNaN(inputValue) && parseInt(inputValue) >0)) {
      setQuantity(inputValue);
    }
  };

  const handleSubmit = () => {
    if (!isNaN(quantity) && quantity > 0) {
      onSubmit(data, quantity);
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "-" ) {
      event.preventDefault();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Quantity</h2>
        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;
