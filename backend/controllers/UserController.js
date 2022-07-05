const Model = require("../models/UserModel")
const Jwt = require("jsonwebtoken")
const bycrpt = require("bcrypt")


class Controller {

    signup = (req,res) => {
        const { username, email, password,phone,address} = req.body;
    
        if(!username || !email || !password || !phone ||!address){
            res.status(400).json({msg: 'Please enter all fields'});
        }
    
        Model.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'});
    
            const newUser = new Model({ username, email, password,phone,address});
    
            // Create salt and hash
            bycrpt.genSalt(10, (err, salt) => {
                bycrpt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            (
                                // { id: user._id },
                                // process.env.JWT_SECRET_KEY,
                                // { expiresIn: 3600 },
                                (err) => {
                                    if(err) throw err;
                                    res.status(200).json({
                                        
                                        user: {
                                            id: user._id,
                                            name: user.username,
                                            email: user.email,
                                            address:user.address,
                                            phone:user.phone
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
            .then(user => {
                if(!user) return res.status(400).json({msg: 'User does not exist'});
    
                // Validate password
                bycrpt.compare(password, user.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});
    
                        Jwt.sign(
                            { id: user._id },
                            process.env.TOKEN_SCERET,
                            (err, token) => {
                                if(err) throw err;
                                
                               res.header('auth-token', token).json({ user, token })
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.username,
                                        email: user.email
                                    }
                                });
                            }
                        )
                    })
            })
    }

    getAll(req, res, next) {
        Model.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        })
    }
    get(req, res, next) {
        let { id } = req.params;
        Model.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }
 
    post(req, res, next) {
        let body = req.body;
        let doc = new Model(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }
    put(req, res, next) {
        let { id } = req.params;let body = req.body;
        Model.updateOne({ _id: id }, {
            $set: body}, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }
    delete(req, res, next) {
        let { id } = req.params;
        Model.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        })
    }
 
 
 
 
}


const controller = new Controller();
module.exports = controller;
