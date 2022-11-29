
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);
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
    const { id } = req.params;

    const user = await User.findOne({ where: { id: id } })

    res.status(200).json({
        status: 'success!',
        method: 'get-one-user',
        data: user
    })
};

const AddUser = async (req = request, res = response) => {
    const { firstName, lastName, country, birth, club } = req.body;
    const user = await User.create({
        firstName,
        lastName,
        country,
        birth,
        club
    }) // User.build() & User.save() 

    // const test = await cloudinary.uploader.upload(req.body.file);

    console.log(test);

    res.status(200).json({
        status: 'success!',
        method: 'add - user',
        user
    })
};

const UploadFile = async (req = request, res = response) => {
    const test = req.files;

    // try {
    //     const rest = await cloudinary.uploader.upload(test);
    // }
    // catch (err) {
    //     res.status(500).json({
    //         msg: 'Algo salió mal'
    //     })
    // }
    console.log(test)
}

const UpdateUser = async (req = request, res = response) => {
    const { id } = req.params;
    const fields = req.body;
    // const user = await User.update({ id }, { ...fields })
    const user = await User.update({ ...fields }, { where: { id } })

    res.status(200).json({
        status: 'success!',
        method: 'update - user',
        user
    })
};

const DeleteUser = async (req = request, res = response) => {
    const { id } = req.params;
    const { state, ...rest } = req.body;
    const user = await User.update({ state }, { where: { id } });

    res.status(200).json({
        status: 'success!',
        method: 'user-delete-partial',
        user
    })
};

const DeleteUserSuper = async (req = request, res = response) => {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } })

    res.status(200).json({
        status: 'success!',
        method: 'user-destroy',
        user
    })
}

module.exports = {
    GetUsers,
    GetOneUser,
    AddUser,
    UploadFile,
    UpdateUser,
    DeleteUser,
    DeleteUserSuper
}











































































