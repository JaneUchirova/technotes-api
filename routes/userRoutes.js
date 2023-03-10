const express = require('express')
const router = express.Router()
const usersController=require('../controllers/usersController')
const verifyJWT = require('../middleware/veryfyJWT')

router.use(veryfyJWT)

router.route('/')
      .get(usersController.getAllUsers)
      .post(usersController.createNewUser)
      .patch(usersController.updateUser)
      .delete(usersController.deleteUser)


      module.exports=router
