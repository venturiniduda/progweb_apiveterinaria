import express from "express"
import AdminController from "../controller/admin.controller"

const router = express.Router();

router.get("/:id", AdminController.getAdmin);
router.get("/", AdminController.getAdmins);
router.post("/", AdminController.addAdmin);
router.patch("/:id", AdminController.updateAdmin);
router.delete("/:id", AdminController.deleteAdmin);

export default router;