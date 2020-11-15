let Employee = require('./employee');
let Person = require('./person');

class Main {
    static main() {
        let emp1 = new Employee();
        let emp2 = emp1.emp();
        let person1 = new Person();
        let person2 = person1.hello();
        console.log(emp2);
        console.log(person2);
        console.log(emp1.emp());
        console.log(person1.hello());
    }
}
Main.main();