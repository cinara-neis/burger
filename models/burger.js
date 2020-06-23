const orm = require("../config/orm");

const burger = {
    selectAll: () => {
        return new Promise((resolve, reject) => {
            orm.selectAll("burgers").then((result) => {
                resolve(result);
            });
        });
    }

}
module.exports = burger;