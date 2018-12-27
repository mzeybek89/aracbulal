const express = require('express');
//models
const Tag = require('../models/Tag');
//helpers
const {tagEkle} = require('../helpers/my_functions');

const router = express.Router();



/* POST home page. */
router.post('/', function(req, res, next) {
   const searchTerm = req.body.searchTerm;
   res.redirect('s/'+searchTerm);
});


router.get('/test',(req,res,next)=>{
  res.end('This is a test page');
});


/* GET home page. */
router.get('/:term?', function(req, res, next) {
    const searchTerm = req.params['term'];
    tagEkle(searchTerm);
    res.render('search', { title: 'Aracbulal.com Arama Sonuçları',term:searchTerm });
});



module.exports = router;
