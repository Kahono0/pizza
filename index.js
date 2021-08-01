let size = document.getElementById('size')
let crust = document.getElementById('crust')
let topping = document.getElementById('topping')
let placeOrder = document.getElementById('place')
let topList = document.getElementById('toplist')
let topl = document.getElementById('topl')
clearAll()
let orders = []
let toppingPizza = 0
let addTopping = document.getElementById("addtopping")
addTopping.onclick = function () {
  toppingPizza++
  topList.innerHTML = toppingPizza
}
/*addTopping.onclick = function () {
  topping.value=""
  topl.innerHTML = "Select another topping and press <b>add topping</b>"
  topping.onchange = function(){
    toppingPizza.push(topping.value)
    let i = 0
    let len = toppingPizza.length
    for(i=0;i<=len;i++){
      topList.innerHTML += "<br>"+toppingPizza[i]
    }
  }
  topList.innerHTML += "<br>"
  //toppingPizza.push(topping.value)
}*/
/*topping.onchange = function () {
  topl.innerHTML = "Press <b>add topping</b> to save topping"
  addTopping.style.display = "block"
  addTopping.onclick = function() {
    toppingPizza.push(topping.value)
    addTopping.style.display = "none"
    topl.innerHTML = "Choose your preffered topping"
    toplist.innerHTML += "<br>" + topping.value
    topping.value = ""
  }
}*/
function clearAll(){
  size.value = ""
  crust.value = ""
  topping.value = ""
}
function pizza(size,crust,topping){
  this.size = size
  this.crust = crust
  this.topping = topping
}
let totalPrice
let price
placeOrder.onclick = function () {
  let sizeP
  let crustP
  let delivery = 0
  switch (size.value){
    case "small":
      sizeP = 450
      break
    case "medium":
      sizeP = 700
      break
    case "large":
      sizeP = 1100
      break
    default:
      sizeP = 0
      break
  }
  switch(crust.value){
    case "crust1":
      crustP = 100
      break
    case "crust2":
      crustP = 150
      break
    case "crust3":
      crustP = 200
      break
    default:
      crustP = 0
      break
  }
  if (sizeP == 0){
    alert("Please choose your preffered size")
  }
  else{
      var del = confirm("Do you want your pizza to be delivered")
      if(del==true){
        let area = prompt("Where do you want your pizza delivered")
        delivery = 100
        alert("Delivery will be made at:"+area+"\n add will cost you:"+delivery)
      }
      let toppingP
      toppingP = 100*toppingPizza
      Price = sizeP + crustP + toppingP + delivery
      alert("Order placed Successfully\nTotal price:"+Price)
      totalPrice += Price
      orders.push(parseInt(Price))  
      clearAll()
      }
    }
  //alert(pizza.size)
document.getElementById("addorder").onclick = function () {
  document.getElementById('add').innerHTML = "Order another Pizza"
  clearAll()
}/*size.onchange = function(){
  sizePizza = size.value;
}*/
document.getElementById('finish').onclick = function () {
  let total = 0
  let i=0
  let summary = document.getElementById('summary')
  for(i=0;i<=orders.length-1;i++){
    j = i+1
    p = orders[i]
    summary.innerHTML += "Order"+j+":"+p+"<br>"
    total += orders[i]
    
  }
  alert("Total Price:"+total)
  
}