// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

pp.get("/api", (req,res)=>{
  res.json({
    unix:Date.now(),
    utc:new Date().toUTCString()
  })
})

app.get('/api/:date' , (req,res,next)=>{
const inp=req.params.date

if(/^\d+$/.test(inp)) 
{
const date = new Date(inp*1);
const utcString = date.toUTCString();
res.json({
  unix:parseInt(inp),
  utc:utcString
})
}
else
{
if(isNaN(new Date(inp).getTime()))
  res.json({ error : "Invalid Date" })
const d=new Date(inp).toUTCString()
const ux = new Date(inp).getTime();
res.json({
unix:ux,
utc:d
})
}
next()
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
