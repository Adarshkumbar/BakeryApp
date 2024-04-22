const cookie = require("../models/cookieModel");
const ingredient = require("../models/ingredientModel");

const getAutomatic = async (req, res) => {
  res.status(200).json({ success: true, error: "No data ATM " });
};

const putAutomatic = async (req, res) => {
    const maxCookies = req.body.maxCookies;
    console.log("max cookies ", maxCookies);
    let totalSugar = 0;
    let totalOil = 0;
    let totalChocolate = 0;
    let totalNuts = 0;
    let totalFlour = 0;
    try {
        const cookieData = await cookie.find();
    
       
    
        Object.keys(maxCookies).forEach(shape => {
            console.log("Shape:", shape);
            const cookie = cookieData.find(cookie => cookie.name === shape);
            if (cookie) {
                cookie.details.forEach(detail => {
                    switch (detail.ingredient) {
                        case 'sugar':
                            totalSugar += detail.quantity * maxCookies[shape];
                            break;
                        case 'oil':
                            totalOil += detail.quantity * maxCookies[shape];
                            break;
                        case 'chocolate':
                            totalChocolate += detail.quantity * maxCookies[shape];
                            break;
                        case 'nuts':
                            totalNuts += detail.quantity * maxCookies[shape];
                            break;
                        case 'flour':
                            totalFlour += detail.quantity * maxCookies[shape];
                            break;
                        default:
                            // Handle if the ingredient is not found in the cookie details
                            break;
                    }
                });
            }
        });
    
        console.log("😁 Totals:", totalSugar, totalOil, totalChocolate, totalNuts, totalFlour);
        // You can send the totals to the client or perform any other operation here
    } catch (error) {
        console.error("Error fetching cookie data:", error);
        // Handle the error appropriately, such as sending an error response to the client
    }
    try {
        // Update the quantities of ingredients in the database
        await ingredient.findByIdAndUpdate("661f7e721aa1c988f4addd14", {
            $inc: { quantity: -totalFlour },
        });
        await ingredient.findByIdAndUpdate("661f97d61aa1c988f4addd42", {
            $inc: { quantity: -totalChocolate },
        });
        await ingredient.findByIdAndUpdate("661f7e631aa1c988f4addd12", {
            $inc: { quantity: -totalOil },
        });
        await ingredient.findByIdAndUpdate("661f67a5d5f67ed67c9e4fc6", {
            $inc: { quantity: -totalNuts },
        });
        await ingredient.findByIdAndUpdate("661f7e3a1aa1c988f4addd10", {
            $inc: { quantity: -totalSugar},
        });
    
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error updating ingredient quantities:", error);
        res.status(202).json({ success: false, error: error.message });
    }
};

module.exports = { getAutomatic, putAutomatic };
