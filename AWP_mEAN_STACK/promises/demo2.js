const fs = require("fs");

/*let readDemo = () => {
    const filePath = "C:/Users/Rupali/Desktop/temp1.txt";

    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });
};*/

/**
 * Difficult to Understand the FLOW :: NON BLOCKING.
 * Excption Handling Becomes Difficult.
 *
 * Callback inside Callback
 */
let readDemo1 = () => {
    try {
        const filePath = "C:/Users/Rupali/Desktop/temp2.txt";

        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            console.log(err);
            console.log("1", data);
        });
    } catch (err) {
        console.log(err);
    }

    try {
        const filePath = "C:/Users/Rupali/Desktop/temp1.txt";

        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            console.log(err);
            console.log("2", data);
        });
    } catch (err) {
        console.log(err);
    }
};


readDemo1();
//readDemo2();