const jwt = require("jsonwebtoken")
module.exports.authMiddleware= async(req,res,next)=>{
    try{
        const token = req.heders.token
        if(!token) res.status(401).json.authMiddleware({msg:"you are not authhorized"})
    else{
     const verifyToken=jwt.verify(token, processs.env.JWT_SECRET)
     req.personeId= verifyToken.id
     next ()
    }
    }
    catch(error){
        res.status(500).json({msg:"somthong went wrong!",error:error.message})

    }
}