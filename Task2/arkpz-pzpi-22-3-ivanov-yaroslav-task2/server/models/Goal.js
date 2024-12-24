const { Schema, model } = require("mongoose");

const Goal = new Schema({
  content: { type: String, required: true },
  startDate: { type: Date, required: true, default: Date.now },
  finishDate: { type: Date, required: true, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = model("Goal", Goal);
