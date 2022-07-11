const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app =  express()
const Blog = require('./models/blog')

app.set('view engine','ejs')

const db = "mongodb+srv://ajaykumar:ajay8688@cluster0.jlbwenk.mongodb.net/blogs?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology:true })
    .then((result) =>{
        console.log("connected") 
        app.listen(3000)
    })
    .catch((err) => console.log(err))

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res) => {
    Blog.find().sort({ createdAt:-1 })
    .then((result) => {
        res.render('index',{ title: "Home" ,blogs:result })
    })
})

app.get('/create',(req,res) => {
    res.render('create',{ title:"Add new Blog" })
})
app.get('/update/:id',(req,res) => {
    const id = req.params.id
    Blog.findById(id)
    .then((result) => {
        res.render('update',{ title:"Update Blog",blog:result })
    })
    .catch((err) => {
        console.log(err)
    })
})
app.post('/create',(req,res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
        res.redirect('/')
    })
    .catch((err) => 
        console.log(err))
})

app.get('/:id',(req,res) => {
    const id = req.params.id
    Blog.findById(id)
    .then((result) => {
        res.render('blog',{ title:result.title,blog:result})
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/delete/:id',(req,res) => {
    const id = req.params.id
    Blog.remove({_id:id},
    function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    }
    )
})

app.post('/updateblog/:id',(req,res) =>{
    const id = req.params.id
    Blog.findByIdAndUpdate({_id:id}, req.body,
        function(err,data){
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/')
            }
        })
})
