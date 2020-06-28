
const orm = require("../config/orm");



const burger = {
    selectAll: () => {
        return new Promise((resolve, reject) => {
            orm.selectAll("burgers").then((result) => {
                resolve(result);
            });
        });
    },

    insert: (columns, values) => {
        return new Promise((resolve, reject) => {
            orm.insert("burgers", columns, values).then((result) => {
                resolve(result);
            });
        });

    },

    update: (id) => {
        return new Promise((resolve, reject) => {
            orm.update("burgers", "devoured", 1, id).then((result) => {
                resolve(result);
            });
        });

    },



}


module.exports = burger; 