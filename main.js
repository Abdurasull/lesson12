
class Person {
    #age;
    #username;
    constructor(username, age, gender) {
        this.#username = username;
        this.#age = age;
        this.gender = gender;
    }
    get aditAge(){
        return {age: this.#age, username: this.#username}
    }
    set aditAge({newAge, newUsername}){
        this.#age = newAge;
        this.#username = newUsername;
    }
}

class  Student extends Person {
    constructor(username, age, gender, groupName) {
        super(username, age, gender);
        this.groupName = groupName
    };
    getStudentInfo(){
        return `Ismi = ${this.aditAge.username}
        Yoshi = ${this.aditAge.age}
        Guruhi: ${this.groupName}`
    }
}

const student = new Student("Abdurasul", 28, 1, "SN1");

console.log(student.getStudentInfo());