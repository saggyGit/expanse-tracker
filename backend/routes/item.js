const express = require("express");

const router = express.Router();



router.post("/", require("./../controllers/item").createItem);
router.get("/", require("./../controllers/item").getItem);
router.delete("/:itemID", require("./../controllers/item").deleteItem);
router.get("/:itemID", require("./../controllers/item").getidItem);
router.put("/:itemID", require("./../controllers/item").editItem);



module.exports = router;