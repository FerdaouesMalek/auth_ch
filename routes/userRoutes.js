const router= require("express").Router()
const {register,login,getUser}= require('../controllers/userController')
const {authMiddlewar}= require('../middleware/authMiddleware')
router.post("/register",register)
router.post("/login",login)
router.get("/",authMiddlewar,getUser)







module.exports= router