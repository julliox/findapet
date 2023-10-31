const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    async doLogin(req, res){
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(422).json({error: 'Campo obrigatorio não preenchido!'})
        }

        //Check if user exists
        const user = await User.findOne({ email: email })

        if (!user) {
        return res.status(422).json({error: 'Usuario não encontrado'})
        }

        //Check password
        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword) {
            return res.status(422).json({error : "Senha invalida!"})
        }
        
        try{
            const secret = process.env.SECRET

            const token = jwt.sign(
                {
                    id: user._id
                },
                secret,
            )

            res.status(200).json({token, msg:"Login efetuado com sucesso!"})
        } catch(err){
            console.log(err)
            res.status(500).json({internalError: "Houve um erro interno, Tente novamente mais tarde."})
        }
    }

}