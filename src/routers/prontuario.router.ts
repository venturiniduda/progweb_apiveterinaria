import express from "express"
import ProntuarioController from "../controller/prontuario.controller"

const router = express.Router();

router.get("/:id", ProntuarioController.getProntuario);
router.get("/", ProntuarioController.getProntuarios);
router.post("/", ProntuarioController.addProntuario);
router.patch("/:id", ProntuarioController.updateProntuario);
router.delete("/:id", ProntuarioController.deleteProntuario);

export default router;