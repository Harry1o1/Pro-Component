const express = require('express');
const router = express.Router();
const {
        getAllData,
        // getOneItem,
        // updateData,
        // deleteData
} = require('../controllers/login');



router.route('/').get(getAllData);
// router.route('/:itemID').get(getOneItem).patch(updateData).delete(deleteData);


module.exports = router;