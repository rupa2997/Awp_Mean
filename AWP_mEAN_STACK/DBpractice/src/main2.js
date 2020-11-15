let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let details = {
    host: "localhost",
    user: "root",
    password: "Rupa2997@",
    database: "DBpractice"
}

let access = async () => {
    let connection = mysql.createConnection(details)
    await connection.connectAsync()

    let query1 = "DELETE FROM ?? WHERE ??=?";
    let rupali = await connection.queryAsync(query1, ["Db1", "id", 3]);
    console.log(rupali);
    await connection.endAsync();

}

access();