let admin = {
  rules: 777,
};
function User(name, age) {
  this.name = name;
  this.age = age;
  this._proto_ = admin;
}
let u1 = new User("Petr", 21);
