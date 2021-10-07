//    homework number 5 
//class Storage {
//  constructor(items) {
//    this.items = items;
//  }
//  getItems(item) {
//    return this.items;
//  }
//  addItem(newItem) {
//    return this.items.push(newItem);
//  }
//  removeItem(itemToRemove) {
//    let index = this.items.indexOf(itemToRemove);
//    if (index > -1) {
//      return this.items.splice(index, 1);
//    }
//  }
//}
//
//// Change code above this line
//const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//storage.addItem("Droid");
//console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//storage.removeItem("Prolonger");
//console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 

//class StringBuilder {
//  constructor(value) {
//    this.value = value;
//  }
//  getValue(value) {
//    return this.value;
//  }
//  padEnd(str) {
//    this.value = this.value + str;
//  }
//  padStart(str) {
//    this.value = str + this.value;
//  }
//  padBoth(str) {
//    this.value = str + this.value + str;
//  }
//}
//// Change code above this line
//const builder = new StringBuilder(".");
//console.log(builder.getValue()); // "."
//builder.padStart("^");
//console.log(builder.getValue()); // "^."
//builder.padEnd("^");
//console.log(builder.getValue()); // "^.^"
//builder.padBoth("=");


//number 12
//class Car {
//  #brand;
//  // Change code below this line
//
//  constructor({ brand, model, price }) {
//    this.#brand = brand;
//    this.model = model;
//    this.price = price;
//  }
//  getBrand(brand) {
//    return this.#brand;
//  }
//
//  changeBrand(newBrand) {
//    this.#brand = newBrand;
//  }
//
//  // Change code above this line
//}
//
//console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // { model: "Q3", price: 36000 }
//console.log(new Car({ brand: "bmw", model: "X5", price: 58900 })); // { model: "X5", price: 58900 }
//console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // { model: "Murano", price: 31700 }


//number 13
//class Storage {
//  #items;
//  // Change code below this line
//
//  constructor(items) {
//    this.#items = items;
//  }
//
//  getItems() {
//    return this.#items;
//  }
//
//  addItem(newItem) {
//    this.#items.push(newItem);
//  }
//
//  removeItem(itemToRemove) {
//    this.#items = this.#items.filter((item) => item !== itemToRemove);
//  }
//}
//
//// Change code above this line
//const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//storage.addItem("Droid");
//console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//storage.removeItem("Prolonger");
//console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


//number 16
//class Car {
//  // Change code below this line
//  static MAX_PRICE = 50000;
//  #price;
//
//  constructor({ price }) {
//    this.#price = price;
//  }
//
//  get price() {
//    return this.#price;
//  }
//
//  set price(newPrice) {
//    if (newPrice < Car.MAX_PRICE) {
//      return (this.#price = newPrice);
//    }
//  }
//  // Change code above this line
//}
//
//const audi = new Car({ price: 35000 });
//console.log(audi.price); // 35000
//
//audi.price = 49000;
//console.log(audi.price); // 49000
//
//audi.price = 51000;
//console.log(audi.price); // 49000


//number 17
//class Car {
//  static #MAX_PRICE = 50000;
//  // Change code below this line
//  static checkPrice(price) {
//    if (price > Car.#MAX_PRICE) {
//      return "Error! Price exceeds the maximum";
//    }
//    return "Success! Price is within acceptable limits";
//  }
//
//  // Change code above this line
//  constructor({ price }) {
//    this.price = price;
//  }
//}
//
//const audi = new Car({ price: 36000 });
//const bmw = new Car({ price: 64000 });
//
//console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


//number 18
//class User {
//  constructor(email) {
//    this.email = email;
//  }
//
//  get email() {
//    return this.email;
//  }
//
//  set email(newEmail) {
//    this.email = newEmail;
//  }
//}
//// Change code below this line
//
//class Admin extends User {
//  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
//}
//
//console.log(Admin.AccessLevel.BASIC); // "basic"
//console.log(Admin.AccessLevel.SUPERUSER); // "superuser"


//number 19
//class User {
//  email;
//
//  constructor(email) {
//    this.email = email;
//  }
//
//  get email() {
//    return this.email;
//  }
//
//  set email(newEmail) {
//    this.email = newEmail;
//  }
//}
//
//class Admin extends User {
//  // Change code below this line
//
//  static AccessLevel = {
//    BASIC: "basic",
//    SUPERUSER: "superuser",
//  };
//  constructor({ email, accessLevel }) {
//    super(email);
//    this.accessLevel = accessLevel;
//  }
//
//  // Change code above this line
//}

//const mango = new Admin({
//  email: "mango@mail.com",
//  accessLevel: Admin.AccessLevel.SUPERUSER,
//});
//
//console.log(mango.email); // "mango@mail.com"
//console.log(mango.accessLevel); // "superuser"


//nymber 20
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
