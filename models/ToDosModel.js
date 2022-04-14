import mongoose from "mongoose";

const ToDosSchema = mongoose.Schema({
  title: String,
  status: {
      type: Boolean,
      default: false,
  },
},
{
    timestamps: true
}
);

const ToDosModel = mongoose.model("ToDos", ToDosSchema);

export default ToDosModel;