const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type:String,  required:true},
  username: {type:String , required:true},
  password: {type : String , required : true},
});

module.exports = mongoose.model('Product', dataSchema);
