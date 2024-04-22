const Cookie = require("../models/cookieModel");
const ingredient = require("../models/ingredientModel");

const getAllCookie = async (req, res) => {
  try {
    const cookies = await Cookie.find();
    res.status(200).json({ success: true, data: cookies });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getCookieById = async (req, res) => {
  try {
    const { id } = req.params;
    const cookie = await Cookie.findById(id);

    if (!cookie) {
      return res
        .status(404)
        .json({ success: false, message: "Cookie not found" });
    }

    res.status(200).json({ success: true, data: cookie });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createCookie = async (req, res) => {
  try {
    const { name, details, temperature, baking_time } = req.body;

    const newCookie = new Cookie({
      name,
      details,
      temperature,
      baking_time,
    });

    await newCookie.save();

    res.status(201).json({ success: true, data: newCookie });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const updateCookie = async (req, res) => {
  try {
    // const { id } = req.params;

    const data = req.body;
    // console.log("req body " , data.flour);
   
    await ingredient.findByIdAndUpdate("661f7e721aa1c988f4addd14", {
      $inc: { quantity: -data.flour },
    });
    await ingredient.findByIdAndUpdate("661f97d61aa1c988f4addd42", {
      $inc: { quantity: -data.chocolate },
    });
    await ingredient.findByIdAndUpdate("661f7e631aa1c988f4addd12", {
      $inc: { quantity: -data.oil },
    });
    await ingredient.findByIdAndUpdate("661f67a5d5f67ed67c9e4fc6", {
      $inc: { quantity: -data.nuts },
    });
    await ingredient.findByIdAndUpdate("661f7e3a1aa1c988f4addd10", {
      $inc: { quantity: -data.sugar },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteCookie = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCookie = await Cookie.findByIdAndDelete(id);

    if (!deletedCookie) {
      return res
        .status(404)
        .json({ success: false, message: "Cookie not found" });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllCookie,
  getCookieById,
  createCookie,
  updateCookie,
  deleteCookie,
};
