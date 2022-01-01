import { Router } from 'express'
import {
   signup,
   login,
   logout,
   current
    } from '../../../controllers/auth'

    import {
        validateSignup,
        validateLogin
        } from '../auth/validation'
    
import quard from '../../../middlewares/guard'
const router = new Router()

router.post('/signup', validateSignup, signup)
router.post('/login', validateLogin, login)
router.post('/logout', quard, logout)
router.get('/current', quard, current);

export default router
