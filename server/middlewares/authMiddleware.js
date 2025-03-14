import "dotenv/config";
import jwt from 'jsonwebtoken';

export default(req,res,next)=>{
    const authHeader=req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied" });
    }
    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"


    
    try{
       
       
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log("Decoded JWT:", decoded);  
        req.user=decoded;
        next();

    }catch(error){
        res.status(401).json({message:"Invalid token"});
    }
};