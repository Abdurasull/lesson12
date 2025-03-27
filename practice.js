class Electronic {
    #name
    #model
    #price
    #ekran
    constructor(name, model, ekran, price) {
        this.#name = name;
        this.#model = model;
        this.#price = price;
        this.#ekran = ekran;
    }

    get getInfo(){
        return {
            name: this.#name, 
            model: this.#model, 
            ekran: this.#ekran, 
            price: this.#price
        }
    }
    set getInfo({name, model, ekran, price}){
        this.#name = name;
        this.#model = model;
        this.#ekran = ekran;
        this.#price = price;
    }
}
// // Telephon qismi boshlandi---------------------------------
// class Telephon extends Electronic{
//     #infiTel
//     constructor(ram, ...arg){
//         super(...arg);
//         this.ram = ram;
//     }
//     getInfoTel(){
//         this.#infiTel = this.getInfo;
//         this.#infiTel['ram'] = this.ram;
//         return this.#infiTel;
//     }
//     setPhoneInpho(newName, newModel, newEkran, newPrice, ram){
//         this.getInfo = {name: newName, model: newModel, ekran: newEkran, price: newPrice};
//         this.ram = ram;
//     }

// }

// let telephon = new Telephon("8", "Samsung S11", "Samsung", "150X100", 800000 );
// // Telephon ma`lumotlarini chiqaramiz
// console.log(telephon.getInfoTel());

// // telephon modelini o`zgartiramiz
// telephon.setPhoneInpho("samsung S21", "Samsung","200x100", 1200000, "16");
// // Telephon ma`lumotlarini chiqaramiz
// console.log(telephon.getInfoTel());
// // Telephon qismi tugadi----------------------------------


// // Laptop qismi boshlandi---------------------------------
// class Laptop extends Electronic {
//     #infoKom
//     constructor(ram, pros, karta, ...arg) {
//         super(...arg);
//         this.ram = ram;
//         this.pros = pros;
//         this.karta = karta;
//     }
//     getInfoKom(){
//         this.#infoKom = this.getInfo;
//         this.#infoKom['ram'] = this.ram;
//         this.#infoKom['pros'] = this.pros;
//         this.#infoKom['karta'] = this.karta;
//         return this.#infoKom;
//     }
//     setKomInfo(ram, pros, karta, name, model, ekran, price){
//         this.#infoKom = {name: name, model: model, ekran: ekran, price: price};
//         this.ram = ram;
//         this.pros = pros;
//         this.karta = karta;
//     }

// }

// let Laptop1 = new Laptop("24", 16, 18, "S11", "Huawei", "1500X1000", 5000000);
// // Laptop ma`lumotlarini chiqaramiz
// console.log(Laptop1.getInfoKom());

// // Laptop modelini o`zgartiramiz
// Laptop1.setKomInfo("20", 18, 24, "S33", "Huawei", "1000X1500", 8000000);
// // Telephon ma`lumotlarini chiqaramiz
// console.log(Laptop1.getInfoKom());
// // Laptop qismi tugadi------------------------------------


// Playstation  qismi boshlandi---------------------------------
class Playstation  extends Electronic {
    #infoPlay
    constructor(ram, pros, karta, countPlay, ...arg) {
        super(...arg);
        this.ram = ram;
        this.pros = pros;
        this.karta = karta;
        this.countPlay = countPlay;
    }
    getInfoPlay(){
        this.#infoPlay = this.getInfo;
        this.#infoPlay['ram'] = this.ram;
        this.#infoPlay['pros'] = this.pros;
        this.#infoPlay['karta'] = this.karta;
        this.#infoPlay['countPlay'] = this.countPlay;
        return this.#infoPlay;
    }
    setPlayInfo(ram, pros, karta,countPlay, name, model, ekran, price){
        this.#infoPlay = {name: name, model: model, ekran: ekran, price: price};
        this.ram = ram;
        this.pros = pros;
        this.karta = karta;
        this.countPlay = countPlay;
    }

}

let Laptop1 = new Playstation ("24", 16, 18, "S11", 101,  "Huawei", "1500X1000", 5000000);
// Playstation  ma`lumotlarini chiqaramiz
console.log(Laptop1.getInfoPlay());

// Playstation  modelini o`zgartiramiz
Laptop1.setPlayInfo("20", 18, 24, "S33",202, "Huawei", "1000X1500", 8000000);
// Telephon ma`lumotlarini chiqaramiz
console.log(Laptop1.getInfoPlay());
// Playstation  qismi tugadi------------------------------------