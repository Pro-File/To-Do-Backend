import SubToDosModel from "../models/SubToDosModel.js";
import mongoose from "mongoose";

export const getAllSubToDos = async (req, res) => {
  try {
    const SubToDos = await SubToDosModel.find();
    res.status(200).json({
        data: SubToDos,
        message: "Sub To Dos Fetched Successfully!"
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSubToDo = async (req, res) => {
  const toDo = req.body;
  const newSubToDo = new SubToDosModel(toDo);
  try {
    await newSubToDo.save();
    res
      .status(200)
      .json({ message: "New Sub ToDo Added Successfully!", data: newSubToDo });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateSubToDo = async (req, res) => {
  const updatedStatus = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Sub To Do Found !" });
  try {
    const updatedSubToDo = await SubToDosModel.findByIdAndUpdate(
      _id,
      { ...updatedStatus, _id },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Sub To Do Updated Successfully!", updatedSubToDo });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

