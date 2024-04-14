const Cookie = require('../models/cookieModel');

getAllCookie =  async (req, res) => {
    try {
        const cookies = await Cookie.find();
        res.status(200).json({ success: true, data: cookies });
    } catch (error) {
        res.status(500).json({ success: false, 
            error: error.message });
    }
},

// Get a single cookie by ID
getCookieById = async (req, res) => {
    try {
        const { id } = req.params;
        const cookie = await Cookie.findById(id);

        if (!cookie) {
            return res.status(404).json({ success: false, message: 'Cookie not found' });
        }

        res.status(200).json({ success: true, data: cookie });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
},

// Create a new cookie
createCookie = async (req, res) => {
    try {
        const { name, details } = req.body;
        
        // Create a new cookie instance
        const newCookie = new Cookie({
            name,
            details
        });

        // Save the new cookie
        await newCookie.save();

        res.status(201).json({ success: true, data: newCookie });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
},

// Update a cookie
updateCookie = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, details } = req.body;

        // Update the cookie
        const updatedCookie = await Cookie.findByIdAndUpdate(id, { name, details }, { new: true });

        if (!updatedCookie) {
            return res.status(404).json({ success: false, message: 'Cookie not found' });
        }

        // Update ingredients if necessary
        // Here you would write code to update the related Ingredient documents based on changes in the Cookie details
        // For example, you might iterate through the details array and update Ingredient documents accordingly

        res.status(200).json({ success: true, data: updatedCookie });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
},

// Delete a cookie
deleteCookie = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the cookie
        const deletedCookie = await Cookie.findByIdAndDelete(id);

        if (!deletedCookie) {
            return res.status(404).json({ success: false, message: 'Cookie not found' });
        }

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { getAllCookie, getCookieById, createCookie, updateCookie, deleteCookie }