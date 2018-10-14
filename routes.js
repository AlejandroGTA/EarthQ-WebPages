let express = require('express');
let router = express.Router();

router.get('/',function(req,res){
    //res.render('./index.html');
    res.end("wsd");
});


module.exports = router;