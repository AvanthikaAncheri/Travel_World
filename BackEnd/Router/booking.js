import express from 'express'

import { verifyAdmin, verifyUser } from '../Utils/VerifyToken.js'
import { createBooking, getAllBooking, getBooking } from '../Controllers/bookingController.js'

const router = express.Router()

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.get('/',verifyAdmin,getAllBooking)

export default router