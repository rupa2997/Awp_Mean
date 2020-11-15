const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs);

let readDemo = async () => {
    console.log("Hello Async Awai");

    const filePath1 = "C:/Users/Rupali/Desktop/temp2.txt";
    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log("1", data1);

    const filePath2 = "C:/Users/Rupali/Desktop/temp3.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log("2", data2);

    const filePath3 = "C:/Users/Rupali/Desktop/temp1.txt";
    const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    console.log("3", data3);
};

readDemo();