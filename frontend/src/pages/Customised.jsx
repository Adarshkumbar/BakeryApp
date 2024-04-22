import React, { useState } from 'react';

const Customised = () => {
  const [flour, setFlour] = useState('');
  const [oil, setOil] = useState('');
  const [sugar, setSugar] = useState('');
  const [chocolate, setChocolate] = useState('');
  const [nuts, setNuts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., submit data to backend
    console.log('Form submitted:', { flour, oil, sugar, chocolate, nuts });
  };

  const handleInputChange = (e, setter) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue > 0) {
      setter(inputValue);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="flour">
              Flour
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="flour"
              type="number"
              placeholder="Enter flour amount"
              value={flour}
              onChange={(e) => handleInputChange(e, setFlour)}
            />
            <img src="https://5.imimg.com/data5/RG/YW/MY-21924532/wheat-flour.jpg" alt="Flour" className="mt-2 mx-auto" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="oil">
              Oil
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oil"
              type="number"
              placeholder="Enter oil amount"
              value={oil}
              onChange={(e) => handleInputChange(e, setOil)}
            />
            <img src="https://freshfry.me/cdn/shop/articles/blog_veg_canola_800x.png?v=1630507150" alt="Oil" className="mt-2 mx-auto" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="sugar">
              Sugar
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sugar"
              type="number"
              placeholder="Enter sugar amount"
              value={sugar}
              onChange={(e) => handleInputChange(e, setSugar)}
            />
            <img src="https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=1024,640" alt="Sugar" className="mt-2 mx-auto" style={{ width: '150px', height: '150px' }} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="chocolate">
              Chocolate
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="chocolate"
              type="number"
              placeholder="Enter chocolate amount"
              value={chocolate}
              onChange={(e) => handleInputChange(e, setChocolate)}
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDtQx3S39TqKwhlIn5jrreijILTD10OjXY2SIOh1zPA&s" alt="Chocolate" className="mt-2 mx-auto" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="nuts">
              Nuts
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nuts"
              type="number"
              placeholder="Enter nuts amount"
              value={nuts}
              onChange={(e) => handleInputChange(e, setNuts)}
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27Kq6DI1cR_c7JFtQQRuCQF3Rx19g01bcjfc1xjIpVA&s" alt="Nuts" className="mt-2 mx-auto" style={{ width: '150px', height: '150px' }} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Customised;
