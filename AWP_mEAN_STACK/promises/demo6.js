const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "C:/Users/Rupali/Desktop/temp1.txt";

    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            console.log("1", data);

            const filePath2 = "C:/Users/Rupali/Desktop/temp2.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log("2", data);

            const filePath3 = "C:/Users/Rupali/Desktop/temp3.txt";
            return fs.readFileAsync(filePath3, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log("3", data);
        })
        .catch((err) => {
            console.log(err);
        });
};

readDemo();