// exercise1
// 1 pack of socks =$10
// 2 Tshirts = $8 each

const socksPrice = 10;
const tshirtPrice = 8;
const tshirtQuantity = 2;
const productCost = socksPrice + (tshirtPrice * tshirtQuantity);
document.getElementById("output").innerText= `Product Cost : $${productCost}`;