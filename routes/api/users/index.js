import { Router } from 'express'
import { aggregation } from '../../../controllers/users'
    
import quard from '../../../middlewares/guard'
import roleAccess from '../../../middlewares/role-access'
import { Role } from '../../../lib/constants'

const router = new Router()

router.get('/stats/:id', quard, roleAccess(Role.ADMIN), aggregation)

export default router