import Conversation from "../models/conversationmodel.js"
import Message from "../models/messagemodel.js";
import { io,getReceiverSocketId } from "../socket/socket.js";
export const sendMessage =async (req,res)=>{
    // console.log("message sent",req.params.id);


    try
    {
        const {message} =req.body;
        const {id:receiverId}=req.params;
        const senderId =req.user._id

       let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId,receiverId]
            }
        })
        if(!conversation)
            {
                conversation=await Conversation.create({
                    participants:[senderId,receiverId],
                })
            }
        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage)
            {
                conversation.messages.push(newMessage._id)
            }
            // await conversation.save();
            // await newMessage.save();
            await Promise.all([conversation.save(),newMessage.save()])

            //SOCKET IO FUNCTIONS
            const receiverSocketId=getReceiverSocketId(receiverId)
            if(receiverSocketId){
                // used to send events to specfic clients
                io.to(receiverSocketId).emit("newMessage",newMessage)
            }

            res.status(201).json(newMessage)
    }
    catch(error)
    {
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const getMessage=async (req,res)=>{
    try {
        const {id:userToChatId}=req.params
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},            
        }).populate("messages");//NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation)
            {
                return res.status(200).json([]);
            }
        const messages=conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessage controller: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}