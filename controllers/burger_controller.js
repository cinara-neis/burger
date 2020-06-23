const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
    });
});

module.exports = router;