import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
const protectRoute =async(req,res,next)=>{

    try {
        const token= req.cookies.jwt
        if(!token)
            {
                return res.status(401).json({error:"Unauthorized - no token Provided"})
            }

            const decoded= jwt.verify(token,process.env.JWT_SERECT)
            if(!decoded)
                {
                    return res.status(401).json({error:"Unauthorized - Invalid Token"})
                }
            const user=await User.findById(decoded.userId).select("-password");
            if(!user)
                {
                    return res.status(404).json({error:"Unauthorized - no token Provided"})
                }
            req.user=user
            next();

    } catch (error) {
        console.log("Error in protectedRoute middleware: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoute;