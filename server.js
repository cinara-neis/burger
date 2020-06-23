const express = require("express");
const app = express();


const PORT = process.env.PORT || 8080;



// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars Middleware
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Server access to burger_controller
const routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server now listening at http://localhost:${PORT}`);
});

// Sequence of creation of app? (linear/non-linear?)
// Assuming setup instructions give basic outline of what file to begin working on first
// connection -> orm -> model -> controller -> views-> public