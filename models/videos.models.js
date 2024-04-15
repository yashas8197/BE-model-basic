const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelLogoUrl: String,
  viewsCount: Number,
  dataPosted: Date,
  thumbnailImgUrl: String,
  videoDuration: Number,
});

const Video = mongoose.model("Video", videoSchema);

module.export = Video;
