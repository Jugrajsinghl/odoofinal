import express from"express"
import {LoginController, getUser, logout, register,LoginGoogle} from "../controllers/auth_controller.js"
const router = express.Router();

router.post("/register", register);
router.post("/login",LoginController);
router.post("/loginwithgoogle",LoginGoogle);
router.post("/getuser",getUser);
router.post("/logout",logout);
export default router;