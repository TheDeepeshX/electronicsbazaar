var express = require("express");
var router = express.Router();
var pool=require('./pool');
var upload=require('./multer');
const fs = require('fs');

// routers
router.post("/Display_all_Products_for_menu", function (req, res, next) {
    console.log('data from front ',req.body)
    pool.query(
      "SELECT * FROM products where Categoryid=?",[req.body.categoryid],
      function (error, result) {
        if (error) {
            console.log('error',error)
          res
            .status(200)
            .json({ status: false, message: "DB error Check DBServer" });
        } else {
          res
            .status(200)
            .json({
              status: true,
              message: "Products Featch Sucessfully",
              data: result,
            });
        }
      }
    );
  });

  router.post('/fetch_product_details_by_productid', function (req, res) {
    try {
        pool.query('SELECT P.*,(select categoryname from category where Categoryid=P.categoryid)as categoryname ,(select Brandname from brands where brandsid=P.brandid)as brandname ,(select productname from products where productid=P.productid)as productname  from productdetails P where P.productid=?',[req.body.productid], 
        function (error, result) {
            if (error) {
                res.json({ status: false, message: 'Database Error!' })
            }
            else {
                res.json({ status: true, data: result })
            }
        })
    }
    catch (e) {
        res.json({ status: false, message: 'Server Error!' })
    }
})


router.post('/display_productdetails_by_id', function (req, res) {
  try {
    console.log('bodydata',req.body);
      pool.query('SELECT P.*,(select categoryname from category where Categoryid=P.categoryid)as categoryname ,(select Brandname from brands where brandsid=P.brandid)as brandname ,(select productname from products where productid=P.productid)as productname  from productdetails P where P.productdetailsid=?;',[req.body.productdetailsid], 
      function (error, result) {
          if (error) {
              console.log(error)
              res.json({ status: false, message: 'Database Error!' })
          }
          else {
              console.log(result)
              res.json({ status: true, message:"Data featch sucessfully",data: result })
          }
      })
  }
  catch (e) {
      res.json({ status: false, message: 'Server Error!' })
  }
})

  
module.exports = router;
