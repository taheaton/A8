  //Answer 1
  (function () {

  // Create an array of just the prices
  var prices = items.map( function (item) {
    return item.price;
  });
  console.log(prices);

  // Add all of the prices together
  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  });
  console.log(sum);

    // Divide by total number of items
  var avg = sum / prices.length;
  console.log(avg);

  // Convert it to 2 decimal places
  var converted = avg.toFixed(2);
  console.log(converted);

  // Make it a string
  var str = 'The average price is $' + converted;
  console.log(str);

  // Make it show up on the page

    // Find our answer element
  var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  answer1.appendChild(textNode);
}());

//Answer 2
  (function () {
// set min and max
var min = 14.00;
var max = 18.00;

// filter prices with min
var maxitems = items.filter( function (item) {
  if (item.price > min)
  return items;
});

console.log(maxitems);

//filter with max price
var fitems = maxitems.filter( function (item) {
  if (item.price < max)
  return items;
});
console.log(fitems);

//gimme title or, er, fitle
var fitle = fitems.map( function (item) {
    return item.title;
  });
  console.log(fitle);

// Make it show up on the page

// Find our answer elements
var fitlea = fitle[0];  
var answer2a = document.querySelector('#answer2a');
var textNode = document.createTextNode(fitlea);
answer2a.appendChild(textNode);
// Create a node from our above answer ready for the DOM
var fitleb = fitle[1];
var answer2b = document.querySelector('#answer2b');
var textNode = document.createTextNode(fitleb);
answer2b.appendChild(textNode);
// Append newly created node to our answer element
var fitlec = fitle[2];
var answer2c = document.querySelector('#answer2c');
var textNode = document.createTextNode(fitlec);
answer2c.appendChild(textNode);
}());

//Answer 3
  (function () {
//Currency filter to GBP
var cc = items.filter( function (item) {
    if (item.currency_code == "GBP")
        return true;
    });
  console.log(cc);
//GBP title
var cctitle = cc.map( function (item) {
    return item.title;
  });
  console.log(cctitle);
// GBP price
var ccprice = cc.map( function (item) {
    return item.price;
  });
  console.log(ccprice);

  var ccstr = cctitle + " costs £" + ccprice
  console.log(ccstr);

   // Find our answer element
   // Create a node from our above answer ready for the DOM
   // Append newly created node to our answer element

  var answer3 = document.querySelector('#answer3');
  var textNode = document.createTextNode(ccstr);
  answer3.appendChild(textNode);
}());


  
//Display a list of all items who are made of wood.
(function () {
  //Question 4

// Run index of function to return items containing wood  
var wood = items.filter(function (item) {
    if (item.materials.indexOf('wood') !== -1 )
      return true;
  });
console.log(wood);
// 
var woodTitle = wood.map( function (item) {
    return item.title;
  });
  console.log(woodTitle);

   // Make it show up on the page

    // Find our answer element
  var answer4 = document.querySelector('#answer4');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(woodTitle);
    // Append newly created node to our answer element
  answer4.appendChild(textNode);
}());

//Answer 5


//5  Display the name, number of items and the items it is made of.
(function(){

//get number of materials

var mat = items.map( function (item) {
    return item.materials.length;
  });
console.log(mat);

//filter the ones with mats >=8
var filterMat = items.filter(function (item) {
    if (item.materials.length >= 8)
      return true;
  });
console.log(filterMat);

//names!!!
var titles = filterMat.map( function (item) {
    return item.title;
  });
  console.log(titles);

//Materials
var materials = filterMat.map( function (item) {
    return item.materials;
  });
  console.log(materials);

// Title of item 1
var titleOne = titles.shift( function (item) {
  return item.title;
});
console.log(titleOne);

//Materials of 1
var materialsOne = materials.shift( function (item) {
  return item.materials;
});
console.log(materialsOne);

//Title of item 2
var titleTwo = titles.shift( function (item) {
  return item.title;
});
console.log(titleTwo);

//Materials of 2
var materialsTwo = materials.shift( function (item) {
  return item.materials;
});
console.log(materialsTwo);

// Make it show up on the page

    // Find our answer element
  var answer5a = document.querySelector('#answer5a');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(titleOne);
    // Append newly created node to our answer element
  answer5a.appendChild(textNode);

  var answer5b = document.querySelector('#answer5b');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(materialsOne);
    // Append newly created node to our answer element
  answer5b.appendChild(textNode);

  var answer5c = document.querySelector('#answer5c');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(titleTwo);
    // Append newly created node to our answer element
  answer5c.appendChild(textNode);

  var answer5d = document.querySelector('#answer5d');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(materialsTwo);
    // Append newly created node to our answer element
  answer5d.appendChild(textNode);
}());

//6
( function(){
  var who = items.filter(function (item) {
    if (item.who_made === "i_did")
      return true;
  });
console.log(who);

var selfmade = who.length;

//Convert to text
var selfstr = selfmade + " were made by their sellers";
// Make it show up on the page

    // Find our answer element
  var answer6 = document.querySelector('#answer6');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(selfstr);
    // Append newly created node to our answer element
  answer6.appendChild(textNode);
}());

// we can use these 
// array.map()
// array.filter()
// array.reduce()
// document.createTextNode()
// .appendChild()
//Using the items variable, use array.map(), 
//array.reduce(), array.forEach, and array.filter()
//Which item has a "GBP" currency code? Display it's name and price.

//1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


