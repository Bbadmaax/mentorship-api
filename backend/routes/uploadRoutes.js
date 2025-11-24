import express from 'express'
import { upload } from '../middlewares/upload.js';
import { Uploadfile } from '../controller/uploadController.js';
import { protect } from '../middlewares/Protect.js';

const router = express.Router();

router.post('/', protect, upload.single('file'), Uploadfile)

export default router 