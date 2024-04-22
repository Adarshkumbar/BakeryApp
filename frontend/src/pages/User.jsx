import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const User = () => {
  return (
    <>
    <ToastContainer />
    <div className='relative'>
      <Link to={"/"} className="absolute top-0 left-0 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 font-bold w-[100px] mt-5 ml-5">Go Back</Link>
      <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?bakery')" }}>
        <div className="flex flex-col items-center mt-[-100px]">
          <Link
            to="/user/auto"
            className="btn mb-10 text-lg font-bold"
            style={{ 
              background: 'linear-gradient(to bottom right, #9b51e0, #6f41b7)',
              color: 'white',
              padding: '20px 40px',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Go to Automatic
          </Link>
          <Link
            to="/user/recipe"
            className="btn mb-10 text-lg font-bold"
            style={{ 
              background: 'linear-gradient(to bottom right, #9b51e0, #6f41b7)',
              color: 'white',
              padding: '20px 40px',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Go to Recipe
          </Link>
          <Link
            to="/user/customised"
            className="btn text-lg font-bold"
            style={{ 
              background: 'linear-gradient(to bottom right, #9b51e0, #6f41b7)',
              color: 'white',
              padding: '20px 40px',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Go to Customised
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default User;
