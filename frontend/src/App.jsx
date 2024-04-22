import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Owner from "./pages/Owner";
import User from "./pages/User";
import AutomaticCalculation from "./pages/AutomationCalculation";
import RecipeData from "./components/userComponents/RecipeData";
import { SharedLayout } from "./SharedLayout";
import Customised from "./pages/Customised";
import "react-toastify/dist/ReactToastify.css";
import fetchData from "./data";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setData(res);
      console.log(data);
    };

    getData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/user">
              <Route index element={<User />} />
              <Route path="auto" element={<AutomaticCalculation />} />
              <Route path="recipe" element={<RecipeData />} />
              <Route path="customised" element={<Customised />} />
            </Route>
            <Route path="/owner" element={<Owner />} />
            <Route path="/entire-inv" element={<AutomaticCalculation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
