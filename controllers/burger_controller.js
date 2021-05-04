const router = require("express").Router();
const burger = require("../models/burger");

// GET ROUTE
router.get("/", (req, res) => {
    burger.selectAll().then((results) => {
        const burgerObj = {
            burgers: results
        };
        console.log(`Read data successfully`);
        res.render("index", burgerObj);

    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

// POST ROUTE
router.post("/api/burgers", (req, res) => {
    // console.log(req.body);

    burger.insert(["burger_name", "devoured", "genero", "ano"],
     [req.body.burger_name, req.body.devoured, req.body.genero, req.body.ano]).then((result) => {
        console.log(`Created new burger successfully`);
        res.json(result);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });

});

// PUT ROUTE
router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    // console.log(id);

    burger.update(id).then((result) => {
        console.log(`Updated new burger successfully`);
        res.json(id);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

// DELETE ROUTE
router.delete("/api/burgers/:id", (req, res) => {
    const id = req.params.id;

    burger.delete(id).then((result) => {
        console.log(`Deleted new burger successfully`)
        res.json(result);
    }).catch((err) => {
        if (err) {
            throw (err);
        }
    });
});

module.exports = router;