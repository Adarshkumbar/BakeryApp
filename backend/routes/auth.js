const auth = require("../models/auth")

 const getAuth = async (req, res) => {
    const data = await auth.find();
    res.status(200).json(data);
  };

  module.exports = getAuth