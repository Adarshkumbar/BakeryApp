import React from "react";
import { Link } from "react-router-dom";

const PageOption = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="flex flex-col items-center mt-[-100px]">
        <Link
          to="/user"
          className="btn mb-10 text-xl font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full px-16 py-4"
          style={{ background: 'linear-gradient(to bottom right, #9b51e0, #6f41b7)' }} 
        >
          User
        </Link>
        <Link
          to="/owner"
          className="btn mb-10 text-xl font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full px-16 py-4"
          style={{ background: 'linear-gradient(to bottom right, #9b51e0, #6f41b7)' }}
        >
          Owner
        </Link>
      </div>
    </div>
  );
};

export default PageOption;
