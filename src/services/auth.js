//Function JWT

const jwt = require('jsonwebtoken')

export function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({error: 'Acesso negado!'})
    }

    try{
        const secret = process.env.SECRET

        jwt.verify(token, secret)
        req._id = decoded._id
        next()

    } catch{
        res.status(400).json({error: 'Token invalido!'})
    }
}