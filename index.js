import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
let posts=[];

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index.ejs" , {posts:posts});
});

app.get("/about",(req,res) => {
    res.render("about.ejs");
})

const nowdate=new Date().getDate;

app.post("/addPost",(req,res) => {
    const newPost={
        title:req.body["title"],
        content:req.body["content"],
        date: new Date().toLocaleDateString('en-US')
    };
    posts.push(newPost);
    res.redirect("/");
});




app.listen(port,() => {
    console.log(`Server running on port ${port}.`);
})