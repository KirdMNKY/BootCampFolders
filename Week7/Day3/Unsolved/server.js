var express = require("express");
var chartRoutes = require("./routes/chart-routes");
var app = express();

app.get("/", function(req, res){
  res.send(`
    <div>
      try /cast, /coolness-chart or /attitude-chart/:attitude instead
    </div>
  `);
})

app.use("/charts", chartRoutes);

app.listen(3000);
