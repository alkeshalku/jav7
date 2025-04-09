var express = require("express");
var router = express.Router();
var productmodel = require("../model/product");

router.post("/", (req, res) => {
    try {
      productmodel(req.body).save();
      res.send("Product added");
    } catch (error) {
      res.send(error);
    }
  });
  router.get('/products',async(req,res)=>{
    try {
        var data = await productmodel.find();
        res.send(data)
    } catch (error) {
        
    }
  })
  // delete
router.delete('/delete/:id', async (req, res) => {
    try {
      console.log(req.params.id);
      await productmodel.findByIdAndDelete(req.params.id);
      res.send("Product deleted");
    } catch (error) {
      res.send(error);
    }
  });
  // update
  // Update an employee by ID
  router.put('/update/:id', async (req, res) => {
      try {
          var update = await productmodel.findByIdAndUpdate(req.params.id,req.body);
            res.send("Product updated");
      } catch (error) {
          res.send(error)
      }
  });

  module.exports = router;

  
  