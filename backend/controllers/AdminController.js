const Model = require("../models/AdminModel")
const Jwt = require("jsonwebtoken")
const bycrpt = require("bcrypt")

class Controller {
    signup = (req,res) => {
        const { username, email, password} = req.body;
    
        if(!username || !email || !password){
            res.status(400).json({msg: 'Please enter all fields'});
        }
    
        Model.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'Admin already exists'});
    
            const newUser = new Model({ username, email, password});
    
            // Create salt and hash
            bycrpt.genSalt(10, (err, salt) => {
                bycrpt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(admin => {
                            Jwt.sign(
                                { id: admin._id },
                                process.env.TOKEN_SCERET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        admin: {
                                            id: admin._id,
                                            name: admin.username,
                                            email: admin.email,
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
    }
      // Login Function to login as admin
      login = async (req,res) => {
        const { email, password } = req.body;
        if(!email || !password){
            res.status(400).json({msg: 'Please enter all fields'});
        }
        Model.findOne({email})
            .then(admin => {
                if(!admin) return res.status(400).json({msg: 'Admin does not exist'});
    
                // Validate password
                bycrpt.compare(password, admin.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});
    
                        Jwt.sign(
                            { id: admin._id },
                            process.env.TOKEN_SCERETY,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    admin: {
                                        id: admin._id,
                                        name: admin.username,
                                        email: admin.email
                                    }
                                });
                            }
                        )
                    })
            })
    }


}

const controller = new Controller();
module.exports = controller;