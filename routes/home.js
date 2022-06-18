const express = require('express');
const router = express.Router();

products = [
  {
    name : "FIND ME IN THE RUSH",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQevIsIedpTrB6WJtMOVGNV_ErAUGRjLsR6A&usqp=CAU"
  },
  {
    name : "SEEK AND FIND",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhclXwGThyn2WNK7K_4JNf-xT4paaa0TY7A&usqp=CAU"
  },
  {
    name : " WANNA PLAY?",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7_KlSE_ezSX3w07grh8sX-vn3E48r2NY0Q&usqp=CAU"
  },
  {
    name : "I'M IMMORTAL",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIig3ddGfnS7P9IxaHgJmnlfR-sGEdD_ND0A&usqp=CAU"
  }
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('home',{products});
  }else{
    res.redirect('/')
  }
  
})





module.exports = router;
