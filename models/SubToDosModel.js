import mongoose from "mongoose";

const SubToDosSchema = mongoose.Schema({
  title: String,
  status: {
      type: Boolean,
      default: false,
  },
  todo_id : String,
},
{
    timestamps: true
}
);

const SubToDosModel = mongoose.model("SubToDos", SubToDosSchema);

export default SubToDosModel;