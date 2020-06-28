const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll().then((results) => {
        const burgerObj = {
            burgers: results
        };
        // console.log(burgerObj);
        res.render("index", burgerObj);

    });
});

router.post("/api/burgers", (req, res) => {
    // console.log(req.body);

    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]).then((result) => {
        res.json(result);
    });

});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    console.log(id);

    burger.update(id).then((result) => {
        console.log(result);
        res.json(id);
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    burger.delete(id).then((result) => {
        res.json(result);
    });
});

module.exports = router;