import { Router } from 'express'
import { 
    validateCreate,
     validateUpdate, 
     validateId, 
     validateUpdateFavorite, 
     validateQuery,
     } from './validation'
import {
    getContacts,
     getContactById, 
     addContact, 
     removeContact, 
     updateContact,
    } from '../../../controllers/contacts/index'

import quard from '../../../middlewares/guard'

const router = new Router()

router.get('/', quard, validateQuery, getContacts)

router.get('/:id', quard, validateId, getContactById)

router.post('/', quard, validateCreate, addContact)

router.delete('/:id', quard, validateId,  removeContact)

router.put('/:id', quard, validateId, validateUpdate, updateContact)

router.patch('/:id/favorite', quard, validateId, validateUpdateFavorite, updateContact)

export default router
