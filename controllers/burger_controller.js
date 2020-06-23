const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll().then((result) => {
        const burgerObj = {
            burgers: result
        };
        console.log(burgerObj);
        res.render("index", burgerObj);

    });
});

module.exports = router;