/*const Promise = require("bluebird");
const mysql = require("mysql");
const config1 = require("./config");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let adduserdetails = async () => {
    let connection = mysql.createConnection(config1.conn)
    await connection.connectAsync()
    let query1 = "select * from Db1";
    let result = await connection.queryAsync(query1);
    await connection.endAsync();

}

adduserdetails();*/

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

let insertdata1 = async () => {
    let connection = mysql.createConnection(details)
    await connection.connectAsync()

    let query1 = "insert into Db1(id,name) values(?,?)";

    await connection.queryAsync(query1, [6, "Sharddha"]);
    //console.log(rupali);
    await connection.endAsync();

}
let access1 = async () => {
    let connection = mysql.createConnection(details)
    await connection.connectAsync()
    let query2 = "select * from ??"
    let result = await connection.queryAsync(query2, ["Db1"]);
    await connection.endAsync();
    console.log(result);
}
//insertdata1();
access1();