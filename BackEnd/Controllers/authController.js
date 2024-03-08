import User from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    try {

        // hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

     const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:hash,
        photo:req.body.photo
     })

     await newUser.save()

     res.status(200).json({success:true, message:"Successfully Created"})
        
    } catch (error) {
        res.status(500).json({success:false, message:"Failed to Create",})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const checkCorrectPassword = await bcrypt.compare(password, user.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: 'Incorrect Password' });
        }

        const { password: _, role, ...rest } = user._doc;

        // Create JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15d' });

        // Set token in the browser and send response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days in milliseconds
            secure: process.env.NODE_ENV === 'production', // Set to true in production
            sameSite: 'strict', // Adjust as needed
        });

        res.status(200).json({ success: true, message: 'Successfully logged in', token, data: { ...rest } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
};