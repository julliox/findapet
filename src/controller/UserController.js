const User = require('../models/User')
const bcrypt = require('bcrypt')



module.exports = {
    async create (req, res) {
        const {name, email, password, confirmpassword} = req.body
        if (!name || !email || !password || !confirmpassword) {
            return res.status(422).json({error: 'Campo obrigatorio não preenchido!'})
        }
        if (password != confirmpassword) {
            return res.status(422).json({error: 'Senha não são iguais!'})
        }

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(422).json({error: 'Usuario já cadastrado'})
        }

        //Password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //Create user
        const user = new User ({
            name,
            email,
            password: passwordHash,
        })

        try {
            await user.save()

            res.status(201).json({msg:'Usuario criado com sucesso!'})
        } catch (err){
            console.log(err)
            res.status(500).json({internalError: "Houve um erro interno, Tente novamente mais tarde."})
            
        }
    }
}

// //Private route 
// app.get('/users/:id', async (req, res)=>{
//     const id = req.params.id
//     //Check if exists
//     const user = await User.findById(id, '-password')

//     if(!user) {
//         return res.status(404).json({ msg: 'Usuário não encontrado!'})
//     }

//     res.status(200).json({ user })
// })


// //Login route
// app.post('/auth/login', async(req, res)=>{
//     const { email, password } = req.body

//     if (!email || !password) {
//         return res.status(422).json({error: 'Campo obrigatorio não preenchido!'})
//     }

//     //Check if user exists
//     const user = await User.findOne({ email: email })

//     if (!user) {
//         return res.status(422).json({error: 'Usuario não encontrado'})
//     }

//     //Check password
//     const checkPassword = await bcrypt.compare(password, user.password)

//     if(!checkPassword) {
//         return res.status(422).json({error : "Senha invalida!"})
//     }

//     try{
//         const secret = process.env.SECRET

//         const token = jwt.sign(
//             {
//                 id: user._id
//             },
//             secret,
//         )

//         res.status(200).json({token})
//     } catch{
//         console.log(err)
//         res.status(500).json({internalError: "Houve um erro interno, Tente novamente mais tarde."})
//     }
// })







// Register ROUTE
// app.post('/auth/register', async(req, res)=>{
//     const {name, email, password, confirmpassword} = req.body

//     //Validations
//     if (!name || !email || !password || !confirmpassword) {
//         return res.status(422).json({error: 'Campo obrigatorio não preenchido!'})
//     }
//     if (password != confirmpassword) {
//         return res.status(422).json({error: 'Senha não são iguais!'})
//     }

//     //Check if user exists
//     const userExists = await User.findOne({ email: email })

//     if (userExists) {
//         return res.status(422).json({error: 'Usuario já cadastrado'})
//     }

//     //Password
//     const salt = await bcrypt.genSalt(12)
//     const passwordHash = await bcrypt.hash(password, salt)

//     //Create user
//     const user = new User ({
//         name,
//         email,
//         password: passwordHash,
//     })

//     try {
//         await user.save()

//         res.status(201).json({msg: 'Usuario criado com sucesso!'})
//     } catch(err) {
//         console.log(err)
//         res.status(500).json({internalError: "Houve um erro interno, Tente novamente mais tarde."})
//     }
// })