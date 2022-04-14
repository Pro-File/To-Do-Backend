import ToDosModel from "../models/ToDosModel.js";
import mongoose from "mongoose";

export const getAllToDos = async (req, res) => {
  try {
    const toDos = await ToDosModel.find();
    res.status(200).json({
        data: toDos,
        message: "To Dos Fetched Successfully!"
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createToDo = async (req, res) => {
  const toDo = req.body;
  const newToDo = new ToDosModel(toDo);
  try {
    await newToDo.save();
    res
      .status(200)
      .json({ message: "New List Added Successfully!", data: newToDo });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateToDo = async (req, res) => {
  const updatedStatus = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No To Do List Found !" });
  try {
    const updatedToDo = await ToDosModel.findByIdAndUpdate(
      _id,
      { ...updatedStatus, _id },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "To Do List Updated Successfully!", updatedToDo });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

