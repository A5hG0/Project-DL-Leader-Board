import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  score: { type: Number, default: 0 },
});

export default mongoose.model("User", UserSchema);
    