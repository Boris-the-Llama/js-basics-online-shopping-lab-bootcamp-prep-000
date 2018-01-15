var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemandprice = {};
 var price = Math.floor((Math.random() * 100) + 1);
 itemandprice[item] = price;
 cart.push(itemandprice);
 console.log(`${item} has been added to your cart.`);
 return cart;
}



function viewCart() {
  function getValues(obj) {
 var arr = Object.keys(obj).join("")
 var value = obj[arr]
  return value
  		  }
  var line = "In your cart, you have ";
  var keys = []
 var values = []
 switch(cart.length) {
 case 0:
 console.log("Your shopping cart is empty.");
      break;
     case 1:
       var key = Object.keys(cart[0]);
       var value = getValues(cart[0]);
      console.log(`${line}${key.join("")} at $${getValues(cart[0])}.`);
      break;
     default:
       var string = []
       var lastObject = cart.slice(-1)
       for (var i = 0; i < cart.length-1; i++) {
         keys.push(Object.keys(cart[i]).join(""))
         values.push(getValues(cart[i]));
         string.push(`${keys[i]} at $${values[i]}`)
       }
      var arr = string.join(", ")
      if (cart.length === 2) {
         console.log(`${line}${arr} and ${Object.keys(lastObject[0]).join("")} at $${getValues(lastObject[0])}.`)
       }
       else {
         console.log(`${line}${arr}, and ${Object.keys(lastObject[0]).join("")} at $${getValues(lastObject[0])}.`)
       }
    }
  }

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + Objects.values(cart);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
