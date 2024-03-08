import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import TourRoutes from './Router/TestRouter.js'
import userRoutes from './Router/userRouter.js'
import authRoutes from './Router/auth.js'
import reviewRoutes from './Router/reviews.js'
import bookingRoutes from './Router/booking.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin:true,
    credentials:true 
}

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (err) {
        console.error('Connection failed:', err.message);
    }
};

//middleware 
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours', TourRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/review', reviewRoutes)
app.use('/api/v1/booking', bookingRoutes)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port',port);
})


// to-do

// tourid changed(the mongodb link updated part03:16:00

