"use strict"
var a = (function() {
    console.log("Hi");
    class Product {
        constructor(name, price, expDate) {
            this.productId = Math.floor(Math.random() * 90000) + 10000;
            this.name = name;
            this.price = price.toFixed(2);
            this.expirationDate = new Date(expDate);
        }
        getInfo() {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.productId + ", " + this.name + ", " + this.price
        }
    }

    class ShoppingBag {
        constructor() {
            this.listOfProducts = []
        }
        addProduct(product) {
            var today = new Date()
            if (product.expirationDate.getTime() > today.getTime()) {
                this.listOfProducts.push(product)
            } else {
                console.log("product expired")
            }

        }
        average() {
            var avg = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                avg += parseInt(this.listOfProducts[i].price)
            }
            var result = avg / this.listOfProducts.length;
            return result.toFixed(3)
        }
        getMostExpensive() {
            var valueOFMostExpensive = this.listOfProducts[0].price;
            var indexOFMostExpensive = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (valueOFMostExpensive < this.listOfProducts[i].price) {
                    valueOFMostExpensive = this.listOfProducts[i].price;
                    indexOFMostExpensive = i;
                }
            }
            return this.listOfProducts[indexOFMostExpensive].getInfo();
        }
        calculateTotalPrice() {
            var total = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                total += parseInt(this.listOfProducts[i].price)
            }
            return total;
        }

    }
    class PaymentCard {
        constructor(balance, status, date) {
            this.accountBalance = balance.toFixed(2)
            this.status = status
            this.validUntil = new Date(date)
        }
    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        var today = new Date()
        if (paymentCard.status === "inactive" || paymentCard.validUntil.getTime() < today.getTime()) {
            return "Your card is invalid"
        } else if (paymentCard.accountBalance <= shoppingBag.calculateTotalPrice()) {
            var difference = shoppingBag.calculateTotalPrice() - paymentCard.accountBalance;
            return "You need " + difference + " to buy";
        } else {
            return "Successful transaction!\n You have " + (paymentCard.accountBalance - shoppingBag.calculateTotalPrice()) + " left"
        }
    }


    var paymentCard = new PaymentCard(1000, "active", "2020-06-20")
    var product1 = new Product("banana", 100, "2020-06-20")
    var product2 = new Product("orange", 150, "2020-06-20")
    var product3 = new Product("lemon", 100, "2020-06-20")
    var shop = new ShoppingBag()
    shop.addProduct(product1)
    shop.addProduct(product2)
    shop.addProduct(product3)
    console.log(checkoutAndBuy(shop, paymentCard))

})()