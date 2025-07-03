import express from "express"
import VeterinarioController from "../controller/veterinario.controller"

const router = express.Router();

router.get("/:id", VeterinarioController.getVeterinario);
router.get("/", VeterinarioController.getVeterinario);
router.post("/", VeterinarioController.addVeterinario);
router.patch("/:id", VeterinarioController.updateVeterinario);
router.delete("/:id", VeterinarioController.deleteVeterinario);

export default router;