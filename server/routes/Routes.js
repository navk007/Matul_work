const router = require('express').Router();

//importing user controllers
const {signUp}= require('../controller/userController/signUp')
const {login} = require('../controller/userController/userLogin');
const {deleteUser} = require('../controller/userController/deleteUser');
const {getAll}=require('../controller/userController/getAll');

//importing blog controllers
const{createBlog}= require('../controller/blogController/createBlog')
const{deleteBlog}=require('../controller/blogController/deleteBlog')
const{getAllBlogs}= require('../controller/blogController/getAllBlogs');
const{getBlogById}=require('../controller/blogController/getById');
const{updateBlog}=require('../controller/blogController/updateBlog')
const{myBlogs}=require('../controller/blogController/myBlogs')
//user routes
router.post('/register',signUp)
router.post('/login',login)
router.post('/deleteUser',deleteUser);
router.get('/getAllUsers',getAll);



//blog routes

router.post('/createBlog',createBlog);
router.delete('/deleteBlog',deleteBlog);
router.get('/getAllBlogs',getAllBlogs);
router.get('/getById',getBlogById);
router.put('/updateBlog',updateBlog);
router.get('/myBlogs',myBlogs);
module.exports = router