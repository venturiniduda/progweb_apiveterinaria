import express from "express"
import ConsultaController from "../controller/consulta.controller"

const router = express.Router();

router.get("/:id", ConsultaController.getConsulta);
router.get("/", ConsultaController.getConsultas);
router.post("/", ConsultaController.addConsulta);
router.patch("/:id", ConsultaController.updateConsulta);
router.delete("/:id", ConsultaController.deleteConsulta);

export default router;