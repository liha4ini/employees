const { prisma } = require('../prisma/prisma-client');


const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        return res.status(400).json({ message: 'Пожалуйста, заполните обязательные поля!' })
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    })
}

const register = async (req, res) => {
    res.send('register');
}

const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login,
    register,
    current
}