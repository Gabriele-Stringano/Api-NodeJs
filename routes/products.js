const express = require("express");
const router = express.Router()

router.get('/', async (req, res) => {
   // const ris= await articoliCollection.insertMany(articoli);
    res.status(200).json({ success: true})
})

module.exports = router