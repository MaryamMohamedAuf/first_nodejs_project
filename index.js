const express = require("express");
//all application
const app = express()
const Article = require ("./models/article");
const mongoose = require("mongoose");
mongoose.connect
("mongodb+srv://maryammohamed812002:Mongodb@cluster0.j63hstz.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connected");

}).catch((error) => {
console.log("error",error);
})


app.post("/articles", async (req, res) =>{
    const new_article = new Article();

    const artTitle = req.body.article_title;
	const artBody = req.body.article_body;

    new_article.title = artTitle;
    new_article.body =artBody;
    new_article.number_of_likes = 0;
    await new_article.save();

    res.json(new_article);
});
//in API
app.get("/articles", async (req, res) => {
	const articles = await Article.find();
	console.log("the articles are", articles);

	res.json(articles);
});
//in html
app.get("/showArticles", async (req, res) => {
	const articles = await Article.find();

	res.render("articles.ejs", {
		allArticles: articles,
	});
});

app.listen(3000, () => {
console.log("listening");
});