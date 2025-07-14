import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    interests: [String],
    shortlist: [String], // stores usernames of shortlisted users
});
const User = mongoose.model("User", userSchema);

export default User;
