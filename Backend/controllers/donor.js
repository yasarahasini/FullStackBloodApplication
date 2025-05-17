const Donor = require("../models/Donor"); // ✅ Fixed: typo "reqire" to "require"

// ✅ CREATE DONOR
const createDonor = async (req, res) => {
  try {
    const newDonor = new Donor(req.body); // ✅ Add 'new' keyword
    const donor = await newDonor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ GET ALL DONORS
const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 }); // ✅ Fix typo: "createAt" to "createdAt"
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ UPDATE DONOR
const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDonor); // ✅ Changed to 200 OK (not 201 Created)
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ GET ONE DONOR
const getOneDonor = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ DELETE DONOR
const deleteDonor = async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id); // ✅ Fixed: method was incorrect
    res.status(200).json("Donor deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ GET DONOR STATS
const getDonorsStats = async (req, res) => {
  try {
    const stats = await Donor.aggregate([
      {
        $group: {
          _id: "$bloodgroup",
          count: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ Export all functions
module.exports = {
  createDonor,
  getAllDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorsStats,
};
