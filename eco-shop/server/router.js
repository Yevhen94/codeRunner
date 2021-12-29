const Router = require('express');
const router = new Router();
const controller = require('./controller');
const {check} = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');


router.post('/registration', [
	check("userName", "User name field must have any symbols").notEmpty(),
	check("password", "Password field must have from 4 to 10 symbols").isLength({min: 4, max: 10}),
], controller.registration);
router.post('/login', controller.login);
// router.get('/users', controller.getUsers);


module.exports = router;