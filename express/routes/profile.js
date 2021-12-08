const { getAllData } = require('..controllers/profile')
const router = express.Router();



router.route('/').post(getAllData);




module.exports = router;