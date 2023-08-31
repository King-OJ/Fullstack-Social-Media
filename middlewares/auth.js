import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export const verifyToken = async( req, res, next)=>{
    try {
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message})
    }
}