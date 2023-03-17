const mongoose = require("mongoose");
const Database = {
  connect:()=>{ mongoose.connect("mongodb://localhost:27017/football").then(()=>console.log("kết nối thành công")).catch((err)=>console.log(err))
   
}
}

module.exports = Database;
