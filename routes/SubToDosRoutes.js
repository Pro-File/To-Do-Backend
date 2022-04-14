import express from "express";
import { getAllSubToDos, createSubToDo, updateSubToDo } from "../controllers/SubToDosController.js";

const router = express.Router();

router.get('/', getAllSubToDos);
router.post('/', createSubToDo);
router.put('/:id', updateSubToDo);

export default router;