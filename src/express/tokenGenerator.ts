const jwt = require('jsonwebtoken')
require('dotenv').config()

export function generateJwtToken({...args}){
    const payload = {
        ...args
    }

    return jwt.sign(payload,process.env.JWY_SECRET, {expiresIn:'24h'})
}