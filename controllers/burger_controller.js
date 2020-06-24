const router = require("express").Router();
const Burger = require("../models/burger");

router.get("/", (req, res) => {
    Burger.findAll().then((results) => {
        const burgerObj = {
            burgers: results
        };
        console.log(burgerObj);
        res.render("index", burgerObj);

    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);

    Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then((results) => {
        res.json(results);
    });



});

module.exports = router;