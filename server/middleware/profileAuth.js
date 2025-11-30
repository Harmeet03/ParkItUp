import User from "../models/User.js";
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        
        if(!req.user){
            return res.status(404).json({ message: "User not found." });
        }

        
        next();
    }
    catch(e){
        res.status(401).json({ message: 'Token is not valid' });
        console.error('Token validation error:', e);
    }
}

export default protect