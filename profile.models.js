const mongoose = require("mongoose");

const xProfileSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  bio: String,
  profilePicUrl: String,
  followerCount: Number,
  followingCount: Number,
  companyName: String,
  location: String,
  portfolioUrl: String,
});

const profile = mongoose.model("Profile", xProfileSchema);

module.export = profile;
