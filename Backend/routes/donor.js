const express = require("express");
const {
  createDonor,
  getAllDonors,      // ✅ Fixed function name: was `getAlldonors`
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorsStats
} = require("../controllers/donor"); // ✅ Make sure this path is correct
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");

const router = express.Router();


// ✅ Add Donor
router.post("/",verifyTokenAndAuthorization, createDonor);

// ✅ Get All Donors
router.get("/", getAllDonors);

// ✅ Update Donor
router.put("/:id", updateDonor);

// ✅ Get One Donor
router.get("/find/:id", getOneDonor);

// ✅ Delete Donor
router.delete("/:id", deleteDonor);

// ✅ Donor Stats
router.get("/stats/blood", getDonorsStats); // ✅ Changed route from "/:stats" to a proper named route

module.exports = router;
