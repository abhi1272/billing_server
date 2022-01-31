import express from 'express'
import { createSupport } from '../controllers/support.js'

const router = express.Router()

router.post('/', createSupport);

export default router