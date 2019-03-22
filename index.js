var cart = [];

function addToCart(item) {
  price = Math.floor(Math.random()*100)
  item = {itemName : item, itemPrice: price}
  cart.push(item)
  return `${item} has been added to your cart.`
}

function viewCart(){
  if (cart.length == 0){
    return "Your shopping cart is empty."
  } else {
    cart_format = []
    for (var i = 0; i < cart.length; i++){
      cart_format.push(` ${cart[i].values()[0]} at $${cart[i].values()[1]}`)
    }
    cart_format[cart_format.length-1] = `and ${cart_format[cart_format.length-1]}`
    return `In your cart, you have ${cart_format.join('')}`

  }
  }


function total(){
  var acc = 0
  for (var i = 0; i < cart.values().length; i++){
    if (i%2==0){
      acc = acc + parseInt(cart.values()[i])
    }
  }
  return acc
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function removeFromCart(item){
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber.length == 0){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
