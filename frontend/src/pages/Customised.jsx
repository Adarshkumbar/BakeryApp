import React, { useEffect, useState } from "react";

const Customised = () => {
//   const [value, setValue] = useState("");
//   const [flag, setFlag] = useState(false);
//   const getData = async () => {
//     await axios
//       .get("http://localhost:3000/item")
//       .then((res) => {
//         const post = res.data[0];
//         console.log(post);
//         setValue(post);
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffectct(() => {
//     getData();
//   }, []);
//   // const updateInven = async() =>{
//   //     const resp = axios.put("http://localhost:3000/item",{nuts:inventory.nuts,sugar:inventory.sugar,flour:inventory.flour,oil:inventory.oil,soda:inventory.soda})
//   //     .then((res)=>{
//   //         console.log(res)
//   //     }).catch(error => console.log(error))
//   // }
//   const [result, setResult] = useState(null);
//   const initialInventory = {
//     nuts: value.nuts,
//     sugar: value.sugar,
//     oil: value.oil,
//     flour: value.flour,
//     soda: value.soda,
//   };
//   const [inventory, setInventory] = useState(initialInventory);

//   const calculateIngredients = (circular, square, triangle, star) => {
//     return {
//       nuts: 15 * circular + 10 * square + 20 * triangle,
//       oil: 15 * circular + 10 * square + 20 * triangle + 25 * star,
//       flour: 15 * circular + 10 * square + 20 * triangle + 25 * star,
//       sugar: 15 * circular + 10 * square + 20 * triangle + 25 * star,
//       soda: 10 * square + 20 * triangle + 25 * star,
//     };
//   };

//   const calculateTotalCost = (circular, square, triangle, star) => {
//     const cost = {
//       circular: 20,
//       square: 30,
//       triangle: 45,
//       star: 60,
//     };
//     return (
//       circular * cost.circular +
//       square * cost.square +
//       triangle * cost.triangle +
//       star * cost.star
//     );
//   };

//   const maximizeProfit = async () => {
//     let maxProfit = -Infinity;
//     let bestCombination = null;

//     for (let circular = 0; circular <= 6; circular++) {
//       for (let square = 0; square <= 10; square++) {
//         for (let triangle = 0; triangle <= 5; triangle++) {
//           for (let star = 0; star <= 4; star++) {
//             const ingredients = calculateIngredients(
//               circular,
//               square,
//               triangle,
//               star
//             );

//             if (
//               ingredients.nuts <= value.nuts &&
//               ingredients.oil <= value.oil &&
//               ingredients.flour <= value.flour &&
//               ingredients.sugar <= value.sugar &&
//               ingredients.soda <= value.soda
//             ) {
//               const profit = calculateProfit(circular, square, triangle, star);
//               if (profit > maxProfit) {
//                 maxProfit = profit;
//                 bestCombination = { circular, square, triangle, star };
//               }
//             }
//           }
//         }
//       }
//     }

//     if (bestCombination) {
//       const { circular, square, triangle, star } = bestCombination;
//       const ingredients = calculateIngredients(
//         circular,
//         square,
//         triangle,
//         star
//       );
//       setInventory({
//         nuts: value.nuts - ingredients.nuts,
//         oil: value.oil - ingredients.oil,
//         flour: value.flour - ingredients.flour,
//         sugar: value.sugar - ingredients.sugar,
//         soda: value.soda - ingredients.soda,
//       });
//       console.log(inventory.nuts);
//     }

//     setResult({ profit: maxProfit, combination: bestCombination });
//     setFlag(true);
//     const resp = await axios
//       .put("http://localhost:3000/ingredients", {
//         nuts: inventory.nuts,
//         sugar: inventory.sugar,
//         flour: inventory.flour,
//         oil: inventory.oil,
//         soda: inventory.soda,
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => console.log(error));
//   };

//   const calculateProfit = (circular, square, triangle, star) => {
//     const totalCost = calculateTotalCost(circular, square, triangle, star);
//     const ingredients = calculateIngredients(circular, square, triangle, star);
//     const profit = totalCost;
//     return profit;
//   };

  return (
    <>
         {/* h2>Buy your customised biscuit</h2> */}
      <form onSubmit={handleSubmit}>
        {(bakeryName === "Round Biscuit" || bakeryName === "Square Biscuit") && (
          <>
          <label htmlFor="input1">Nuts : </label>
          <input
            type="number"
            id="input1"
            max={arr[0]} min="1"
            name="input1"
            value={inputValues.input1}
            onChange={handleChange}
            required
          /><br/><br/>
          </>
        )}
 
        {(bakeryName === "Triangle Biscuit" || bakeryName === "Star Biscuit") && (
          <>
          <label htmlFor="input1">Baking Soda : </label>
          <input
            type="number"
            id="input1"
            max={arr[2]} min="1"
            name="input1"
            value={inputValues.input1}
            onChange={handleChange}
            required
 
          /><br/><br/>
          </>
        )}
     
 
      <label htmlFor="input2">Flour : </label>
      <input
        type="number"
        id="input2"
        max={arr[4]} min="1"
        name="input2"
        value={inputValues.input2}
        onChange={handleChange}
        required
      /><br/><br/>
 
      <label htmlFor="input3">Oil : </label>
      <input
        type="number"
        id="input3"
        max={arr[3]} min="1"
        name="input3"
        value={inputValues.input3}
        onChange={handleChange}
        required
      /><br/><br/>
 
      <label htmlFor="input4">Sugar : </label>
      <input
        type="number"
        max={arr[1]} min="1"
        id="input4"
        name="input4"
        value={inputValues.input4}
        onChange={handleChange}
        required
      /><br/><br/>
      {getTotalBiscuites()}
      <p>Total number of biscuites : {minBiscuitesValue}</p>
      <p>Total Cost : {getTotalCost()}</p>
      <button type="submit">Buy {bakeryName}</button>
    </form>

    </>
  );
};

export default Customised;
