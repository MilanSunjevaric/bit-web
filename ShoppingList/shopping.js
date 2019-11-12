"use strict"
    (function () {
        console.log("Hi!");
    })();
function Product(id, name, price, date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expirationDate = date;
}
Product.prototype.getInfo = function () {

}
