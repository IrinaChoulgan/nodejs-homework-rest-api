import fs from 'fs/promises';
import path, { dirname } from 'path';
import {randomUUID} from 'crypto';
import contacts from './contacts.json';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const listContacts = async () => {
    return contacts
  }
  
  const getContactById = async (contactId) => {
    const result = contacts.find((contact) => contact.id === contactId)
    return result
  }
  
  const removeContact = async (contactId) => {
    const index = contacts.findIndex((contact) => contact.id === contactId)
    if (index !== -1) {
      const [result] = contacts.splice(index, 1)
      await fs.writeFile(
        path.join(__dirname, 'contacts.json'),
        JSON.stringify(contacts, null, 2),
      )
      return result
    }
    return null
  }
  
  const addContact = async ({name, email, phone}) => {
    const newContact = {id: randomUUID(), name, email, phone};
   

    if(newContact.name && newContact.email && newContact.phone && newContact.id) {
      contacts.push(newContact);
      await fs.writeFile(
          path.join(__dirname, 'contacts.json'), 
          JSON.stringify(contacts, null, 2)
          )
      console.table('Your added contact:')
    } else {
      console.log('Please enter all parameters: name, email, phone, id')
    }
    return newContact
  }

  const updateContact = async (contactId, body) => {
    const index = contacts.findIndex((contact) => contact.id === contactId)
    if (index !== -1) {
      const newContact = {id: contactId, ...contacts[index], ...body}
      contacts[index] = newContact
      await fs.writeFile(
        path.join(__dirname, 'contacts.json'), 
        JSON.stringify(contacts, null, 2)
        )
        return newContact
    }
    return null
  }
  
  export default {
    listContacts, getContactById, removeContact, addContact, updateContact
  }
