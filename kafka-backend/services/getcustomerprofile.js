"use strict";


const Users = require('../Models/UserModel');

function handle_request(req, callback){
 
  Users.findOne({ _id: req.userid }, (error, getcustomerprofile) => {
	   //console.log("I am here")
    if (error) {
        callback(null, error);
        //res.send();
    }
    if (getcustomerprofile) {
                      
        callback(null, getcustomerprofile); 
        
    }
    else {
         var obj = {
            message : "Invalid credentials",  
        }   
        callback(null, obj); 
            
    }
});
};

module.exports.handle_request = handle_request;












