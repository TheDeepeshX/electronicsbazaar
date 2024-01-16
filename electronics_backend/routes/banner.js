var express = require("express"); 
var router = express.Router();
// mysql
var pool = require("./pool");
var upload = require("./multer");
const fs = require("fs");

// banner submit API upload.single("Files"),
router.post("/submit_banner", upload.single("files"), function (req, res)
{  console.log("noad server Run data post .")
  //  console.log("Filesssss",req.body.Files)
try{
    console.log("data Body  form front_end ",req.body);
    pool.query('insert into banner (bannername,files) values(?,?)',
    [req.body.bannername,req.file.filename],
  function(error,result){
   if(error)
   { console.log('error category sumitedd,',error);
   res.status(500).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result category sumitedd,',result);
    res.status(200).json({status:true,message:'Banner Submited Sucessfully'})
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});


module.exports = router;
