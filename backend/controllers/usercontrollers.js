import User from "../models/userModel.js";
export const getUsersforSidebar =async (req,res)=>{

    try {
        const loggedInUserId=req.user._id;
        const filterdUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        res.status(200).json(filterdUsers)
        
    } catch (error) {
        console.log("Error in getUsersForSidebar: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}