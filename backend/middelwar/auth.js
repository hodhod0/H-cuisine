const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.TOKEN_SCERET, (err, decodedToken) => {
            if (err) {
                return res.json({ status: 400, message: err.message })
                // console.log('err', err.message)
            }
            else {
                next()
            }
        })
    }
    else {
        return res.json({ status: 400, message: 'Not Authenticated User  ! ' })
    }

}

module.exports = { authenticate };