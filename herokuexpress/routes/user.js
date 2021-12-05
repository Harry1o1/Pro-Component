const express = require('express');
const router = express.Router();

const {
        createDa,
        getOneItemYeh,
        updateDa,
        deleteDa
} = require('../controllers/user');



router.route('/register').post(createDa);
router.route('/register/:itemID').get(getOneItemYeh).patch(updateDa).delete(deleteDa);

module.exports = router;