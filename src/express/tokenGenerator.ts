const jwt = require('jsonwebtoken')
import {jwtConfig} from './jwt.config'

export function generateJwtToken({...args}){
    const payload = {
        ...args
    }

    return jwt.sign(payload,jwtConfig.secret, {expiresIn:'24h'})
}