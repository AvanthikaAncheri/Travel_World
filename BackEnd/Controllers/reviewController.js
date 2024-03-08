import Tour from "../Models/Tour.js"
import Review from "../Models/Review.js"


export const createReview = async(req,res)=>{

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try {

        const savedReview = await newReview.save()

        // update the review array

        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({success:true, message:"Review submitted", data:savedReview})
        
    } catch (error) {

        res.status(500).json({success:false, message:"Error...",})
        
    }
}