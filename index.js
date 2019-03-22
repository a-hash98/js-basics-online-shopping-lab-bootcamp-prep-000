var cart = [];

function addToCart(item) {
  var price = Math.random()*100
  item = {itemName : item, itemPrice: price}
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart(){
  if (cart.length == 0){
    return "Your shopping cart is empty."
  } else {
    var cart_format = []
    for (var i = 0; i < cart.length; i++){
      cart_format.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    if (cart.length > 1){
      cart_format[cart_format.length-1] = ` and${cart_format[cart_format.length-1]}`
    }
    return `In your cart, you have ${cart_format.join(',').trim()}.`

  }
  }

var acc = 0
function total(){
  for (var i = 0; i < cart.length; i++){
      acc = acc + parseFloat(cart[i].itemPrice)
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
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
