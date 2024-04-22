const cookie = require("../models/cookieModel");
const ingredient = require("../models/ingredientModel");

const getAutomatic = async (req, res) => {
  res.status(200).json({ success: true, error: "No data ATM " });
};

const putAutomatic = async (req, res) => {
    const data = req.body;
    const cookieData = await cookie.find();
    
    // Object to store total quantities of each ingredient
    const totalIngredients = {
      totalSugar: 0,
      totalOil: 0,
      totalFlour: 0,
      totalChocolate: 0,
      totalNuts: 0
    };

    // Iterate over each shape in the request body
    Object.keys(data).forEach(shape => {
        // Find the corresponding cookie shape from the database
        const shapeData = cookieData.find(cookie => cookie.name === shape);
        console.log("shpe ",shapeData);
        // If the shape exists in the database
        if (shapeData) {
            // Iterate over the ingredients of the shape
            shapeData.details.forEach(detail => {
                // Multiply the quantity of each ingredient by the quantity of the shape
                const ingredientQuantity = detail.quantity * data[shape];
                
                // Update the total quantity of each ingredient
                switch (detail.ingredient) {
                    case 'sugar':
                        totalIngredients.totalSugar += ingredientQuantity;
                        break;
                    case 'oil':
                        totalIngredients.totalOil += ingredientQuantity;
                        break;
                    case 'flour':
                        totalIngredients.totalFlour += ingredientQuantity;
                        break;
                    case 'chocolate':
                        totalIngredients.totalChocolate += ingredientQuantity;
                        break;
                    case 'nuts':
                        totalIngredients.totalNuts += ingredientQuantity;
                        break;
                    default:
                        break;
                }
            });
        }
    });

    // Log the total quantities of each ingredient
    console.log(totalIngredients);
    
    // Log the total quantities of each ingredient
    
  //  try{
  //     await ingredient.findByIdAndUpdate("661f7e721aa1c988f4addd14", {
  //         $inc: { quantity: -data.flour },
  //       });
  //       await ingredient.findByIdAndUpdate("661f97d61aa1c988f4addd42", {
  //         $inc: { quantity: -data.chocolate },
  //       });
  //       await ingredient.findByIdAndUpdate("661f7e631aa1c988f4addd12", {
  //         $inc: { quantity: -data.oil },
  //       });
  //       await ingredient.findByIdAndUpdate("661f67a5d5f67ed67c9e4fc6", {
  //         $inc: { quantity: -data.nuts },
  //       });
  //       await ingredient.findByIdAndUpdate("661f7e3a1aa1c988f4addd10", {
  //         $inc: { quantity: -data.sugar },
  //       });

  //       res.status(200).json({ success: true });
  // } catch (error) {
  res.status(202).json({ success: false, error: error.message });
  // }
};

module.exports = { getAutomatic, putAutomatic };
