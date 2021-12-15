const express=require('express');
require('dotenv').config();
const proxy=require('http-proxy-middleware');

const app=express();

app.use(express.static('public'));

const apiProxyTarget=process.env.API_PROXY_TARGET;
if(apiProxyTarget){
    app.use('/graphql', proxy({target:apiProxyTarget}));
}

const UI_API_ENDPOINT = process.env. UI_API_ENDPOINT || '/graphql';
API_PROXY_TARGET='http://localhost:3000'
const env ={UI_API_ENDPOINT};

app.get('/env.js', function(req,res){
    res.send(`window.ENV = ${JSON.stringify(env)}`)
});

const port=process.env.UI_SERVER_PORT ||8000;

app.listen(port,function(){
    console.log(`UI started on port ${port}`);
});