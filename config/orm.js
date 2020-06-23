const connection = require("../config/connection");

const orm = {
    all: (table) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM ??"
            connection.query(queryString, (table), (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });

        });
    }
}



module.exports = orm;