import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

//Register user
export const register = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        picturePath,
        friends,
        location,
        occupation
      }  = req.body

      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new User(
        {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        }
      )
    
    const savedUser = await newUser.save()
    res.status(StatusCodes.CREATED).json(savedUser)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message})
    }
}


export const login = async(req, res)=>{
  try {
    const { email, password } = req.body
    const userExist  = await User.findOne({ email });

    if(!userExist) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "User does not exist!"});

    const passwordMatch = await bcrypt.compare(password, userExist.password)

    if(!passwordMatch) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Incorrect login details!"});

    const token = await jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);

    delete userExist.password
    res.status(StatusCodes.OK).json({  user: userExist, token})

  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message})
  }
}