
const orm = require("../config/orm");



const burger = {

    // RETURN ALL BURGER DATA
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

    // INSERT NEW BURGER (set burger name and devoured status) 
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

    // UPDATE BURGER'S DEVOURED STATUS TO TRUE BASED ON ID
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

    // DELETE BURGER BASED ON ID
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