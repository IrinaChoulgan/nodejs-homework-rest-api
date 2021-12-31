import { Router } from 'express'
import {
   registration,
   login,
   logout,
   current
    } from '../../../controllers/auth'
    
import quard from '../../../middlewares/guard'
const router = new Router()

router.post('/registration', registration)
router.post('/login', login)
router.post('/logout', quard, logout)
router.get('/current', quard, current);

export default router
