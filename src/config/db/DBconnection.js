const mongoose = require("mongoose");
const Database = {
  connect:()=>{ mongoose.connect("mongodb+srv://dankenvil:dankenvil@cluster0.hihao2c.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("kết nối thành công")).catch((err)=>console.log(err))
   
}
}

module.exports = Database;
