import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import fetchData from '../data';
const Automatic = () => {
  const [cookies, setCookies] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [maxCost, setMaxCost] = useState(0);
  const [maxCookies, setMaxCookies] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setInventory(data[0])
        setCookies(data[1]?.data); 
      } catch (error) {
        console.error('Error fetching cookies:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (cookies?.length > 0 && inventory?.length > 0) {
      const { maxCost, maxCookies } = calculateMaxCostAndCookies(cookies, inventory);
      setMaxCost(maxCost);
      setMaxCookies(maxCookies);
      console.log("🤷‍♂️",inventory , cookies);
    }
  }, [cookies, inventory]);

  const calculateMaxCostAndCookies = (cookiesData, inventoryData) => {
    let maxCost = 0;
    let maxCookies = {};

    const helper = (currentIndex, currentCombination, currentCost, currentCookies) => {
      if (currentIndex === cookiesData.length) {
        if (currentCost > maxCost) {
          maxCost = currentCost;
          maxCookies = { ...currentCookies };
        }
        return;
      }

      const currentCookie = cookiesData[currentIndex];

      for (let count = 0; count <= 10; count++) {
        let canMakeCookie = true;
        let updatedCost = currentCost;
        let updatedCookies = { ...currentCookies };

        for (const detail of currentCookie.details) {
          const ingredient = inventoryData.find(item => item.name === detail.ingredient);
          if (!ingredient || ingredient.quantity < detail.quantity * count) {
            canMakeCookie = false;
            break;
          }
          updatedCost += detail.quantity * ingredient.costPerUnit * count;
        }

        if (canMakeCookie) {
          updatedCookies[currentCookie.name] = count;
          helper(currentIndex + 1, currentCombination, updatedCost, updatedCookies);
        }
      }
    };
    helper(0, [], 0, {});

    return { maxCost, maxCookies };
  };

  const handleBuy = async () => {
    if(confirm("Do you want to buy ?")){
      try {
        // Make the PUT request to update ingredients
        await axios.put('http://localhost:8080/api/autoCalc', {
           maxCookies
        });
        // After successful update, you can perform any additional actions
        console.log('Ingredients updated successfully!');
        alert("payment successfull")
      } catch (error) {
        console.error('Error updating ingredients:', error);
      }
    }
    else{
      alert('Payment Unsuccessful')
    }
    
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Link to={"/"} className="absolute top-0 left-0 bg-green-400 text-white py-3 px-4 rounded hover:bg-green-500 font-bold w-[100px] mt-[7%] ml-5 z-10">Go Back</Link>
      <div className="flex-grow relative bg-gradient-to-br from-purple-600 to-pink-600 flex justify-center items-center">
        <img src="https://imgmedia.lbb.in/media/2021/01/6006774ee7718b4aff3bd05b_1611036494285.jpg" alt="Left Image" className="absolute left-0 bottom-[40%] h-full object-cover z-0" style={{width: '50%', transform: 'translateY(calc(50% - 90px))'}} />
        <img src="https://imgmedia.lbb.in/media/2021/01/6006774ee7718b4aff3bd05b_1611036494285.jpg" alt="Right Image" className="absolute right-0 bottom-[40%] h-full object-cover z-0" style={{width: '50%', transform: 'translateY(calc(50% - 90px))'}} />
        <div className="card-container relative z-10">
          <div className="card bg-gradient-to-br from-white to-gray-300 p-6 rounded-md shadow-md transform hover:scale-105 transition duration-300">
            <div className="text-gray-800 text-center mb-4">
              <h2 className="text-2xl font-semibold">Maximum Shapes Possible</h2>
              <ul>
                {Object.entries(maxCookies).map(([cookie, count]) => (
                 
                  <li key={cookie} className="mb-2">
                    {cookie.charAt(0).toUpperCase() + cookie.slice(1)}: {count}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-800 text-center mb-4">
              <h2 className="text-2xl font-semibold">Maximum Cost with All Inventory</h2>
              <p className="text-xl">Total Cost:₹ {maxCost}</p>
            </div>
            <div className="text-center">
              <button onClick={handleBuy} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-40 text-center font-bold transition duration-300 ease-in-out">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer h-20 bg-gray-800 flex items-center justify-center text-white">Footer</div>
    </div>
  );
};

export default Automatic;
