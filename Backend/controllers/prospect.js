const Prospect = require("../models/Prospect"); // ✅ Fixed: typo "reqire" to "require"

// ✅ CREATE DONOR
const createProspect = async (req, res) => {
  try {
    const newProspect = new Prospect(req.body); // ✅ Add 'new' keyword
    const prospect = await newProspect.save();
    res.status(201).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ GET ALL DONORS
const getAllProspect = async (req, res) => {
  try {
    const prospect = await Prospect.find().sort({ createdAt: -1 }); // ✅ Fix typo: "createAt" to "createdAt"
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ UPDATE DONOR
const updateProspect = async (req, res) => {
  try {
    const updatedProspect = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProspect); // ✅ Changed to 200 OK (not 201 Created)
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ GET ONE DONOR
const getOneProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ DELETE DONOR
const deleteProspect = async (req, res) => {
  try {
    await Prospect.findByIdAndDelete(req.params.id); // ✅ Fixed: method was incorrect
    res.status(200).json("Donor deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};




// ✅ Export all functions
module.exports = {
  createProspect,
  getAllProspect,
  updateProspect,
  getOneProspect,
  deleteProspect,

};
