const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getToken = (req, res, next)=>{
    let token = req.get('Authorization') || req.query.token || req.body.token
    if (token) {
        token = token.replace("Bearer ", "")
        jwt.verify(token, SECRET, function(error, decoded){
            if(error){
                next(error)
            } else {
                req.user = decoded.user
                next()
            }
        })
    } else {
        next()
    }
}

module.exports = getToken