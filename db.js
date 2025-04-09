var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://alkeshalku6:alkesh@cluster0.29bjihn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((error) => {
    console.log(err);
  });
