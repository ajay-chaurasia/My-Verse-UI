const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    )
    next();
});

app.post("/api/articles", (request, response, next) => {
    const article = request.body
    console.log(article)
    response.status(201).json({
        message: 'Article added successfully!'
    })
});

app.get('/api/articles', (request, response, next) => {
    const articles = [
        {
            heading: "The mystery of Javascript",
            subHeading: "What is it and how does it work?",
            content: `Javascript is a fascinating scriptive language which is not interpreted anymore, atleast technically.
            Modern browsers handle Javascript through a JIT compiler which parses the code into Abstract Syntax Tree and then compiles it into Machine Code.
            This machine code is executed, but in background the JS Engine continues to optimize the code and replaces the old code with optimized code as it is executed.
            Wait, what's JS Engine?
            Read the next article to find out.`,
            keywords: ["javascript", "article", "ast", "execution", "context"]
        },
        {
            heading: "JS Engine",
            subHeading: "What is it and what does it do?",
            content: `JS Engine is the program which provides a Javascript code the environment to run it.
            It provides callstack, event loop, callback queue and Web APIs such as setTimeout, console, DOM, fetch etc.
            Javascript as we know is not asynchronous. Its single threaded language, but the Web APIs provided by the JS Engine is what makes it asynchronous.
            Asynchronous activites happen in a separate thread in JS engine and then added to Task queue or the MicroTask queue after completion.`,
            keywords: ["engine", "article", "event", "loop", "callback", "queue"]
        }
    ]
    response.status(200).json({
        message: 'Articles fetched successfully!',
        articles
    })
});

module.exports = app;