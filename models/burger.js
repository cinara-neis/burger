const Sequelize = require("sequelize");
const db = require("../config/connection");



const Burger = db.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
})

Burger.sync({ force: true });








module.exports = Burger;