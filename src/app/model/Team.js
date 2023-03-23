const mongoose = require('mongoose');
const Team = mongoose.Schema({
  name:{type:String,required:true},
  foundationDate:{type:String, required:true},
  logo:{type:String, required:true},
  fund:{type:Number,default:0},
  achivement:[{type:String}]
})
module.exports = mongoose.model('team',Team)