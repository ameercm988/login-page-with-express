const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.redirect('/home')
  }else{
    res.render('login', {loginError:req.session.loginError});
  }
  
});



const emailID = "Ameer@gmail.com";

const passwordID = "9090";

router.post('/login',(req,res) => {
  const {email,password} = req.body;
  if(email === emailID && password ===passwordID ){
    req.session.login = true
    res.redirect('/home')
  }else{
    req.session.loginError = true
    res.redirect('/')
  }
})

router.get('/logout',(req,res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
