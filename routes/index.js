const express = require('express');
const router = express.Router();
//models
const Tag = require('../models/Tag');

/* GET home page. */
router.get('/', function(req, res, next) {

  Tag.find({},(err,tags)=>{
        if (err)
            console.log(err);
        else
            res.render('index', { title: 'Aracbulal.com Anasayfa',tags:tags });
  })
      .skip(0)
      .limit(20)
      .sort({tag:1});

});

module.exports = router;
