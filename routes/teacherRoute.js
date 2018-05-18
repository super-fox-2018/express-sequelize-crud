const express = require("express")
const router = express.Router()

router.get('/teacher',function(req,res) {
	res.render("teacher.ejs")
})


module.exports = router