const express = require('express'); 
const User = require('../model/user.model');
const router = express.Router();
router.post('/signup',(request,response)=>{
    console.log("server signup");
    User.create(request.body).then(result=>{
        console.log(result);
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(200).json(err);
    });
});

router.post('/signin',(request,response)=>{
    User.findOne(request.body).then(result=>{
        console.log(result);
        if(result){
            return response.status(200).json({msg:'successful login'});
        }
        else{
            return response.status(200).json({msg:'failed userlogin'});
        }
       
    })
    .catch(err=>{
        console.log(err);
        return response.status(200).json(err);
    });
})








module.exports = router;