import express from "express"
import TutorController from "../controller/tutor.controller"

const router = express.Router();

router.get("/:id", TutorController.getTutor);
router.get("/", TutorController.getTutores);
router.post("/", TutorController.addTutor);
router.patch("/:id", TutorController.updateTutor);
router.delete("/:id", TutorController.deleteTutor);

export default router;