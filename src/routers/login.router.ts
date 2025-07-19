import express from "express"
import loginController from "../controller/login.controller";

const router = express.Router();

router.post("/", loginController.login);

export default router;