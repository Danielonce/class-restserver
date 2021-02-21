const {Router} = require('express');


//Dest from controller/users
const { 

    usersGet, 
    usersPost,
    usersPut,
    usersDelete,
    usersPatch

} = require('../controllers/users');

const router =  Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

module.exports = router;
