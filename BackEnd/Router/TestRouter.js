import express from 'express';
import { createTour1, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../Controllers/tourController.js';
import { verifyAdmin } from '../Utils/VerifyToken.js';

const router = express.Router();

router.post('/',verifyAdmin, createTour1)
router.put('/:id',verifyAdmin, updateTour)
router.delete('/:id',deleteTour)
router.get('/',getAllTour)
router.get('/:id',getSingleTour)
router.get('/search/getbysearch',getTourBySearch)
router.get('/search/getFeaturedtour',getFeaturedTour)
router.get('/search/getTourCount',getTourCount)

export default router;