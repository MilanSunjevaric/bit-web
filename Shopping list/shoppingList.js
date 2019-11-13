(function () {
    console.log('Hi!');
})

function Product(name, price, expDate) {
    this.productID = (Math.floor((Math.random() * 99999) + 10000))
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expDate);

}

Product.prototype.getProductData = function () {
    var output = (this.name[0] + this.name[this.name.length - 1]).toUpperCase() + this.productID + ', ' + this.name + ', ' + this.price.toFixed(2)
    return output;

}
var product1 = new Product('Banana', 140.524, '12-23-2019');
var product2 = new Product('Mango', 350.8884, '12-23-2019');
var product3 = new Product('Apple', 90.50, '12-23-2019'); //instanceof

console.log(product1.getProductData())

function ShoppingBag() {
    this.listOfproducts = [];
}

ShoppingBag.prototype.addProduct = function (prod) {

    if (this.expirationDate > new Date()) {
        this.listOfproducts.push(prod)
    } else {
        console.log('Date expired!');
    }
}
ShoppingBag.prototype.averagePrice = function () {

    for (var i = 0; i < this.listOfproducts.length; i++) {
        var avg += this.price[i]
    }
}








