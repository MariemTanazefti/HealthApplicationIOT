const express = require("express");
const router = express.Router();



 /**
 * User APIs Routes
 */


const UserController = require("../controllers/userController");

router.get("/users", UserController.getAllUser);
router.post("/users_add", UserController.NewUser);
router.put("/users/:id", UserController.UpdateUser);
router.post("/Login", UserController.Login);
router.get('/users/:id', UserController.GetUserId)


module.exports = router;