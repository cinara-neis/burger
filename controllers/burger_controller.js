const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll().then((results) => {
        const burgerObj = {
            burgers: results
        };
        // console.log(burgerObj);
        res.render("index", burgerObj);

    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

router.post("/api/burgers", (req, res) => {
    // console.log(req.body);

    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]).then((result) => {
        res.json(result);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });

});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    console.log(id);

    burger.update(id).then((result) => {
        console.log(result);
        res.json(id);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    burger.delete(id).then((result) => {
        res.json(result);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

module.exports = router;