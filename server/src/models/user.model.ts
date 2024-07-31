import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../interface/user.interface";

// const userSchema = new mongoose.Schema<IUser>
const userSchema: Schema<IUser> = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
// const User = mongoose.model<IUser>("User", userSchema);

export default User;
