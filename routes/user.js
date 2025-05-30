const {Router} = require("express");
const User = require('../models/user');
const router = Router();


router.get('/signin',(req,res)=>{
    return res.render("signin");
});


router.get('/signup',(req,res)=>{
    return res.render("signup");
});

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body;

    try {

    const token = await User.matchPassword(email,password);

// console.log("token",token); 
    return res.cookie('token',token).redirect("/");
} catch (error) {
    
    return res.render('signin',{
        error:"Wrong password try again",
    });
}


});

router.post("/signup", async (req,res)=>{
const {fullname,email,password } = req.body;
await User.create({
    fullname,
    email,
    password,
});
return res.redirect('/');   
});

router.get('/logout',(req,res)=>{
    res.clearCookie('token').redirect('/');
})

module.exports = router;