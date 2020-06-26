const connection = require("../config/connection");

const orm = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    },

    insert: (table, columns, values) => {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO ?? (??) VALUES (?)";
            connection.query(queryString, [table, columns, values], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    },

    update: (table, column, value, id) => {
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE ${table} SET ${column}=${value} WHERE id=${id}`;
            console.log(queryString);
            connection.query(queryString, (err, result) => {
                if (err) {
                    reject(err);
                }
                console.log(result)
                resolve(result)
            });
        });
    }
}












module.exports = orm; 