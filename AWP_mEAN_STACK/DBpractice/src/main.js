const Promise = require("bluebird")
const mysql = require("mysql")

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let conn = {
    host: "localhost",
    user: "root",
    password: "Rupa2997@",
    database: "DBpractice"
}

let readuser = async () => {
    const connection = mysql.createConnection(conn)

    await connection.connectAsync()

    //let query1 = "insert into profile1 values (1 , 'lakshman') "

    // let query1 = "select ?? as ??,?? from ?? where ?? = ?"
    // let sanket = await connection.queryAsync(query1,[ "id", "rollno","name1","profile1" ,"name1","lakshman"])
    //let query1 = "insert into Db1 values(3,'mona')";
    let query1 = "update ?? set ??=? where ??=?"
    let sanket = await connection.queryAsync(query1, ["Db1", "name", "harshu", "id", 1])
    //let sanket = await connection.queryAsync(query1)
    console.log(sanket)
    await connection.endAsync()
}
readuser()