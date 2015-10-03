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

   // Find our answer element
   // Create a node from our above answer ready for the DOM
   // Append newly created node to our answer element

  var answer3a = document.querySelector('#answer3a');
  var textNode = document.createTextNode(cctitle);
  answer3a.appendChild(textNode);
  
  var answer3b = document.querySelector('#answer3b');  
  var textNode = document.createTextNode(ccprice);
  answer3b.appendChild(textNode);
}());


  
//Display a list of all items who are made of wood.
(function () {
  //Question 4

// Run index of function to return items containing wood  
var wood = items.filter(function (item) {
    if (item.materials.indexOf('wood') !== -1 )
      return true;
  });
console.log(wood)
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
var wood = items.filter(function (item) {
    if (item.materials.indexOf('wood') !== -1 )
      return true;

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

//names!!!
var titleMat = filterMat.map( function (item) {
    return item.title;
  });
  console.log(titleMat);

//number!!!
var numberMat = filterMat.map( function (item) {
    return item.materials.length;
  });
  console.log(numberMat);

//all the materials!!!
var allMat = filterMat.map( function (item) {
    return item.materials.shift;
  });
  console.log(allMat);


items.filter(function(count){
  if (count.materials.length >= 8) {
     array.push(count.title);
     array.push(count.materials.length);
     array2.push(count.materials);

    } //end of if
}); //end of for filter
var item1 = array.shift();
var item2 = array.shift();
var itemA = item1+" "+item2;

var item3 = array.shift();
var item4 = array.shift();
var itemB = item3+" "+item4;

var itemC = array2.shift();
var itemD = array2.shift();

//ITEM1
var answer5A = document.querySelector('#answer5A');
var textNode = document.createTextNode(itemA);
answer5A.appendChild(textNode);
//ITEM2
var answer5B = document.querySelector('#answer5B');
var textNode = document.createTextNode(itemC);
answer5B.appendChild(textNode);
//ITEM3
var answer5C = document.querySelector('#answer5C');
var textNode = document.createTextNode(itemB);
answer5C.appendChild(textNode);
//ITEM3
var answer5D = document.querySelector('#answer5D');
var textNode = document.createTextNode(itemD);
answer5D.appendChild(textNode);
})(); 
// end of self executing function
//6
( function(){
  var array = [];

  items.filter(function(made){
      if(made.who_made === 'i_did'){
          // console.log(made.who_made);
          array.push(made.who_made);
      }//end of if

  })//end of filter
var item1 = array.length;

var answer6A = document.querySelector('#answer6A');
var textNode = document.createTextNode(item1);
answer6A.appendChild(textNode);

})(); // end of self executing function

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


