import express from 'express'
import { protect } from '../middlewares/Protect.js'
import { Authorize} from '../middlewares/Authorize.js'

const router = express.Router()

router.get('/', protect, Authorize('admin'), (req,res)=> {
    res.json({
        message : 'welcome to the dashboard admin'
    })
})

export default router