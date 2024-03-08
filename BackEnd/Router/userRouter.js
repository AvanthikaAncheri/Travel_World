import express from 'express'
import { createUser1, deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/userController.js';
import { verifyAdmin, verifyUser } from '../Utils/VerifyToken.js';
const router = express.Router();

router.post('/', verifyUser,createUser1)
router.put('/:id', verifyUser,updateUser)
router.delete('/:id', verifyUser,deleteUser)
router.get('/', verifyAdmin,getAllUser)
router.get('/:id', verifyUser,getSingleUser)

export default router;