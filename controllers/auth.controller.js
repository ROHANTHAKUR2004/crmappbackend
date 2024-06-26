const jwt = require('jsonwebtoken');
const userService = require('../services/user.service.js');
require('dotenv').config();

exports.signup = async (req, res) =>{
    try{
        console.log("==============in auth controller===========");
        console.log(req);
        const result = await userService.createUser(req.body);
        let statusCode;
        let response;
        if(result.error){
            statusCode = 403;
            response = result.error;
        }else{
            statusCode = 201;
            response = result.user;
        }
        res.status(statusCode).send(response)
    }catch(err){
        res.status(500).send({
            result: err
        })
    }
}

exports.signin = async(req, res) =>{
    try{
        const result = await userService.verifyUser(req.body);
        let statusCode;
        let response;
        if(result.error){
            statusCode = 401;
            response = result.error;
        }else{
            statusCode = 201;
            console.log(req.body, process.env.JWT_SECRET_KEY)
            const token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET_KEY);
            response = {
                message: "user validated",
                token: token,
                userData: result.userData
            };

        }
        res.status(statusCode).send(response);
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}
