import { Request, Response } from "express";
import User from "../models/user";


// Create User
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

// Update User
const updateCurrentUser = async(req: Request, res: Response) => { 
    try {
        const { name, addressLine1, country, city} = req.body;
        const user = await User.findById(req.userId);
        
        // if no user exist
        if(!user){
            return res.status(404).json({ message: "User not found"});
        }

        // Updating the user information
        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error updating user."});
    }
}

export default {
    createCurrentUser,
    updateCurrentUser
};