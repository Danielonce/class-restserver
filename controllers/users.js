const {response} = require('express');

const usersGet = (req = request, res = response) => {

    const{query, name = 'no name', apikey, page = 1, limit = 10} = req.query;

    res.json({
        msg: 'get API - controller',
        query,
        name,
        apikey,
        page,
        limit
    });
}

const usersPost = (req, res = response) => {

    const body = req.body;

    res.json({
        body
    });
}

const usersPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controller'
    });
}

const usersPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch,
}