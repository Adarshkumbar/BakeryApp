import React from 'react';
import InventoryData from '../components/ownerComponents/OwnerData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Owner = () => {
  const pass = "admin";

  const handleLogin = () => {
    const enteredPassword = prompt("Enter Password : ");
    if (enteredPassword === pass) {
      toast.success("Welcome"); 
      return true;
    } else {
      toast.error("Incorrect password"); 
      return false;
    }
  };

  return (
    <>

      <ToastContainer /> 
      {handleLogin() && <InventoryData />} 
  
    </>
  );
};

export default Owner;
