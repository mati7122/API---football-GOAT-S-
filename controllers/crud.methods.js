
const { request, response } = require('express')

const getUsers = (req, res) => {
    res.status(200).json({
        status: 'success!',
        method: 'get - users'
    })
}

const addUser = (req = request, res = response) => {
    const { msg } = req.body;
    res.status(200).json({
        status: 'success!',
        method: 'get - one',
        msg
    })
}

module.exports = {
    getUsers,
    addUser
}