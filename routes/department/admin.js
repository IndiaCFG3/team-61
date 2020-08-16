const express = require("express");
const router = express.Router();

//Item Model
// const Item = require("../../models/User");
const Schemes = require("../../models/Schemes");

//@route GET department/admin
//@desc Get All Items
//@access Public
router.get("/", async (req, res) => {
  try {
    const items = await Schemes.find().sort({ date: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

//@route POST department/admin
//@desc CREATE A SCHEME
//@access Public
router.post("/", async (req, res) => {
  const newItem = new Schemes({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const saveItem = await newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    res.status(500).json({
      message: err,
    });
  }
});

//@route UPDATE department/admin/:id
//@desc UPDATE A scheme
//@access Public
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateitem = await Schemes.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          centralOrState: req.body.centralOrState,
          description: req.body.description,
          documentsRequired: req.body.documentsRequired,
        },
      }
    );
    res.status(200).json(updateitem);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;
