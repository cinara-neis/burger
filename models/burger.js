
const orm = require("../config/orm");



const burger = {
    selectAll: () => {
        return new Promise((resolve, reject) => {
            orm.selectAll("burgers").then((result) => {
                resolve(result);
            }).catch((err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    },

    insert: (columns, values) => {
        return new Promise((resolve, reject) => {
            orm.insert("burgers", columns, values).then((result) => {
                resolve(result);
            }).catch((err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    },

    update: (id) => {
        return new Promise((resolve, reject) => {
            orm.update("burgers", "devoured", 1, id).then((result) => {
                resolve(result);
            }).catch((err) => {
                if (err) {
                    reject(err);
                }
            });
        });

    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            orm.delete("burgers", id).then((result) => {
                resolve(result);
            }).catch((err) => {
                if (err) {
                    reject(err);
                }
            });
        })
    }

}


module.exports = burger; 