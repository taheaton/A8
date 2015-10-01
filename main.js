//create an array of just the prices

var prices = items.map(function(item) {
  return item.price;
});

console.log(prices);
//add prices together
var sum = prices.reduce(function(prev, next) {
  return prev + next;

});
console.log(sum);
//divide by total number of items
var avg = sum / prices.length;
console.log(avg);

//convert it to 2 decimal
var converted = avg.toFixed(2);
console.log(converted):


//make it a string
var str = "The average price is "

//make it show up on the page

//Find our answer element
var answer1 = document.querySelector("#answer1");
//create a node ready for the dom
var textNode = document.createTextNode(str);
//append to the answer element
answer1.appendChild(textNode);

