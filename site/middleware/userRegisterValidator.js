const {check, valiationResult, body} = require('express-validator');
const usersController = require('../controllers/usersController')

const emailMiddleware = {
    verifyEmail: async (req,res,next) =>{
       try{
        [body('email').custom(function(value){
            const users = usersController.users();
            console.log(users);
            const userFound =  users.find(user => {
                return user.email == value;
            })
            if(userFound){
                return true
            } return false
        }).withMessage('E-mail ya existente')]
       }catch(error){
        return next(error)
       }
    }
}

module.exports = emailMiddleware
