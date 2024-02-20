import { Request, Response } from "express";
import User from "../models/user";


const createCurrentUser = async (req: Request, res: Response) => {
    
    try {
        const { auth0Id } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ auth0Id: auth0Id})
        if(existingUser) {
            return res.status(200).send();
        }

        // create user if it doesn't exist
        const newUser = new User(req.body);
        await newUser.save();

        // return the user object to the calling client
        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while creating user"});
    }
}

export default {
    createCurrentUser,
};