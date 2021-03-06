const express = require("express");
const nunjucks = require("nunjucks");
const courses = require("./data");

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0.jpg",
        name: "Rocketseat",
        description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description2: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        links: [
            {
                name: "Github",
                url: "https://github.com/Rocketseat"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/rocketseat_oficial/"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/rocketseat"
            },

        ]
    }

    return res.render('about', {about});
});

server.get("/courses", function(req, res) {
    return res.render('courses', { items: courses});
});

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const course = courses.find(function (course) {
        return course.id === id;
    });

    if (!course) {
        return res.status(404).render("not-found");
    }

    return res.render('course', {item: course});
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log('server is running');
});