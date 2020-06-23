const orm = require("../config/orm");

const burger = {
    all: (data) => {
        orm.all("burgers").then((result) => {
            console.log(result);
        });
    }
}
module.exports = burger;