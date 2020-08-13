const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

// @route Get API items
// @desc Get all  items

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

router.route("/:id").delete((req, res) => {
  // this will delete our item
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
