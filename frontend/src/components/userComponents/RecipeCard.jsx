import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import QuantityModal from "../../subComponents/QuantityModal";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipes ,inventory}) => {
  console.log("🤷‍♂️🤷‍♀️",);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to hold the selected recipe
  const recipesPerPage = 3;
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open or closed

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const openModal = (recipe) => {
    console.log("open moedel " , recipe);
    setSelectedRecipe(recipe);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    console.log("close model" , selectedRecipe);
    setIsModalOpen(false); // Close the modal
  };

  const placeOrder = async (recipe, quantity ) => {
    try {
  
      // Find quantities of ingredients from the request body
      const flourItem = recipe.details.find(
        (item) => item.ingredient === "flour"
      );
      const chocolateItem = recipe.details.find(
        (item) => item.ingredient === "chocolate"
      );
      const oilItem = recipe.details.find(
        (item) => item.ingredient === "oil"
      );
      const nutsItem = recipe.details.find(
        (item) => item.ingredient === "nuts"
      );
      const sugarItem = recipe.details.find(
        (item) => item.ingredient === "sugar"
      );
  
      const flourQuantity = (flourItem ? flourItem.quantity : 0)*quantity;
      const chocolateQuantity =( chocolateItem ? chocolateItem.quantity : 0)*quantity;
      const oilQuantity = (oilItem ? oilItem.quantity : 0)*quantity;
      const nutsQuantity = (nutsItem ? nutsItem.quantity : 0)*quantity;
      const sugarQuantity = (sugarItem ? sugarItem.quantity : 0)*quantity;

      const data = {
        flour : Number(flourQuantity),
        chocolate:Number(chocolateQuantity),
        oil:Number(oilQuantity),
        nuts:Number(nutsQuantity),
        sugar:Number(sugarQuantity)
      }
      // console.log(data);
      await axios.put(`http://localhost:8080/api/cookies/${recipe._id}`, data);

      // console.log("xoxo",flourQuantity,chocolateQuantity,oilQuantity)
      // onUpdate();
      if(data){
      toast.success("Thank you for Purchasing " , 1500)
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }

    closeModal();
  };

  // Slice the recipes array based on currentPage and recipesPerPage
  const currentRecipes = recipes.slice(
    currentPage * recipesPerPage,
    (currentPage + 1) * recipesPerPage
  );

  return (
    // <div className='relative'>
    // <></>
      
    <div id="recipes" className="max-w-screen-md mx-auto">
      <ToastContainer />
      <Link to={"/user"} className="lg : absolute top-20 left-5 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 font-bold w-[100px] mt-5 ml-5 ">Go Back</Link>
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={prevPage}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl font-bold">Cookie Recipes</h1>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={nextPage}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentRecipes.map((recipe) => (
          <div key={recipe._id} className="border rounded-md shadow-md flex flex-col">
            <h2 className="text-xl font-semibold mb-4 uppercase bg-purple-600 text-white py-3 px-6 rounded-t-md">
              {recipe.name}
            </h2>
            <div className="px-4 flex-1">
              <p>
                <strong>Temperature:</strong> {recipe.temperature}°C
              </p>
              <p>
                <strong>Baking Time:</strong> {recipe.baking_time} minutes
              </p>
              <h3 className="text-lg font-semibold mt-3 mb-3">Ingredients:</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 bg-gray-200">
                      Ingredient
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 bg-gray-200">
                      Quantity (grams)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.details.map((detail, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 text-center">
                        {detail.ingredient.charAt(0).toUpperCase() +
                          detail.ingredient.slice(1).toLowerCase()}
                      </td>
                      <td className="px-2 py-2 text-center">{detail.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mx-auto"
                onClick={() => openModal(recipe)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <QuantityModal
          data={selectedRecipe}
          onSubmit={placeOrder}
          onClose={closeModal} 
        />
      )}
    </div>
    
  );
};

export default RecipeCard;
