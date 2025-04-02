// // 1-misol 
// class Animal {
//     #name
//     #age
//     #species
//     constructor(name, age, species) {
//         this.#name = name;
//         this.#age = age;
//         this.#species = species;
//     }
//     get getInfo(){
//         return {
//             name: this.#name,
//             age: this.#age,
//             species: this.#species
//         };
//     }
//     set getInfo({name, age, species}){
//         this.#name = name;
//         this.#age = age;
//         this.#species = species;
//     };
// }

// class Dog extends Animal{
//     #Alltype
//     constructor(Oyog, ...arg){
//         super(...arg);
//         this.oyog = Oyog;
//     }
//     getInfoDog(){
//         this.#Alltype = this.getInfo;
//         this.#Alltype['oyog'] = this.oyog;
//         return this.#Alltype;
//     }
//     setInfoDog(name1, age1){
//         this.getInfo = {
//             name: name1,
//             age: age1,
//             species: this.getInfo.species
//         }
//     }
//     speak(){
//         console.log("Vov Vov");
//     }
// }

// let It = new Dog(4, "Chappi", 3, "sut imizuvchi");

// // ma`lumotlarni olamiz
// console.log(It.getInfoDog());

// // Ma`lumotlarni o`zgartiramiz(faqat ismi va yoshini o`zgartiramiz)
// It.setInfoDog("Kutik", 5, );

// // ma`lumotlarni qayta olamiz
// console.log(It.getInfoDog());
// It.speak()

// // 2-misol 
// class Product {
//     #price;
//     constructor(price) {
//         this.#price = price;
//     }
//     getPrice() {
//         return this.#price;
//     }
//     static filterProducts(products, maxPrice) {
//         return products.filter(p => p.getPrice() <= maxPrice);
//     }
// }

// const products = [new Product(10), new Product(20), new Product(30)];
// console.log(Product.filterProducts(products, 15));

// // 3-misol
// class User {
//     #username;
//     #password;
//     constructor(username, password) {
//         this.#username = username;
//         this.#password = password;
//     }
//     login(username, password) {
//         return this.#username === username && this.#password === password;
//     }
//     logout() {
//         return `${this.#username} tizimdan chiqdi.`;
//     }
// }

// const user = new User("Abdurasul", "1234");
// console.log(user.login("Abdurasul", "1234"));
// console.log(user.logout());

// // 4-misol
// class Flight {
//     #flightNumber;
//     #departureTime;
//     #destination;
//     #availableSeats;
//     constructor(flightNumber, departureTime, destination) {
//         this.#flightNumber = flightNumber;
//         this.#departureTime = departureTime;
//         this.#destination = destination;
//         this.#availableSeats = 100;
//     }
//     bookSeat() {
//         if (this.#availableSeats > 0) {
//             this.#availableSeats--;
//             return 'O‘rin muvaffaqiyatli band qilindi!';
//         }
//         return 'O‘rinlar qolmagan!';
//     }
//     cancelSeat() {
//         this.#availableSeats++;
//     }
//     getAvailableSeats() {
//         return this.#availableSeats;
//     }
// }

// const flight = new Flight("F123", "10:00", "Toshkent");
// console.log(flight.bookSeat());
// console.log(flight.getAvailableSeats());

// // 5-misol
// class Course {
//     #courseName;
//     #courseCode;
//     #students;
//     constructor(courseName, courseCode) {
//         this.#courseName = courseName;
//         this.#courseCode = courseCode;
//         this.#students = [];
//     }
//     addStudent(student) {
//         this.#students.push(student);
//     }
//     removeStudent(student) {
//         this.#students = this.#students.filter(s => s !== student);
//     }
// }

// const course = new Course("Math", "M101");
// course.addStudent("Ali");
// console.log(course);

// // 6-misol
// class Wallet {
//     #balance;
//     constructor(balance) {
//         this.#balance = balance;
//     }
//     addFunds(amount) {
//         this.#balance += amount;
//     }
//     spendFunds(amount) {
//         if (this.#balance >= amount) {
//             this.#balance -= amount;
//         } else {
//             return 'Yetarli mablag‘ yo‘q!';
//         }
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const wallet = new Wallet(50);
// wallet.addFunds(20);
// console.log(wallet.getBalance());

// // 7-misol
// class Notification {
//     #message;
//     #date;
//     constructor(message, date) {
//         this.#message = message;
//         this.#date = date;
//     }
//     sendNotification() {
//         return `Xabar: ${this.#message} - Sana: ${this.#date}`;
//     }
//     clearNotification() {
//         this.#message = '';
//         this.#date = '';
//     }
// }

// const notification = new Notification("Test xabari", "2025-04-02");
// console.log(notification.sendNotification());
