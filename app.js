var express = require("express");
var app = express();



app.use(express.static("public"));

app.get("/:id", function(req, res){
 res.send(req.params.id);
});



app.get('/click', function(req, res) {
    res.redirect('public/about_seaTurtles.html');
});


app.listen(3000, function(){
  console.log("Listening on port 3000...");
});
