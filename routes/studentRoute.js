const express = require("express")
const app = express()
const router = express.Router()


router.get('/student',function(req,res) {
	res.render("student.ejs")
})

router.post('/student',function(req,res) {
	res.send(`berhasil ${req.body.firstname}`)
})


module.exports = router