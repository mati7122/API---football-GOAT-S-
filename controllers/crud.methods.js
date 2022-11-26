
const User = require('../models/user');
const { request, response } = require('express');

const GetUsers = async (req = request, res = response) => {
    const users = await User.findAll();
    res.status(200).json({
        status: 'success!',
        method: 'get-users',
        data: users
    });
};

const GetOneUser = async (req = request, res = response) => {

};

const AddUser = async (req = request, res = response) => {
    // const { msg } = req.body;
    // res.status(200).json({
    //     status: 'success!',
    //     method: 'get - one',
    //     msg
    // })
    const { firstName } = req.body;
    const user = await User.create({ firstName }) // User.build() & User.save() 
    res.status(200).json({
        status: 'success!',
        method: 'add - user',
        user
    })
};

const UpdateUser = async (req = request, res = response) => {

};

const DeleteUser = async (req = request, res = response) => {

};

module.exports = {
    GetUsers,
    GetOneUser,
    AddUser,
    UpdateUser,
    DeleteUser
}