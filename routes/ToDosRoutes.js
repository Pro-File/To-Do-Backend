import express from "express";
import { getAllToDos, createToDo, updateToDo } from "../controllers/ToDosController.js";

const router = express.Router();

router.get('/', getAllToDos);
router.post('/', createToDo);
router.put('/:id', updateToDo);

export default router;