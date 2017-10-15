'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('stores');
var userForm = document.getElementById('userForm');

function Store (minCustomers, maxCustomers, avgCookies, location){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.location = location;
  this.perHourArray = [];
  this.daySum = 0;
  this.cookiesPerHour();
  this.totalForDay();
  allStores.push(this);
  this.render();
};
//Function that generates a random number between minCustomers and maxCustomers
Store.prototype.randNum = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};
//Function that calculates the total by summing up all indices inside of perHourArray (from cookiesPerHour)
Store.prototype.totalForDay = function(){
  for (var i = 0; i < hours.length; i++){
    this.daySum += (this.perHourArray[i]);
  }
  return this.daySum;
};
//Function that calculates the Cookies per hour using avgCookies and the function randNum
Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hours.length; i++){
    var numCust = this.randNum();
    this.perHourArray.push(Math.floor(numCust * this.avgCookies));
  }
};
//Function that renders the data inputs
Store.prototype.render = function() {
  //Initializing the elements and then printing out the locatin to begin out table
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  //Printing out each index in the perHourArray which gets its info from cookiesPerHour
  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.perHourArray[i];
    trEl.appendChild(tdEl);
  }
  //Printing out total for the Day
  tdEl = document.createElement('td');
  tdEl.textContent = this.daySum;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};
//Function that creates the static Header, only variable would be hours
function makeHeaderRow () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('td');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
//Function invocations
makeHeaderRow();
new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki Beach');
//Function that creates a static table ending row
function makeFooterRow () {
  //Nested for loops read how many stores were input and calculates the sum for each hour of every store
  var hourlyTotalsArray = [];
  for (var j = 0; j < hours.length; j++){
    var hourlyTotal = 0;
    for (var k = 0; k < allStores.length; k++){
      hourlyTotal += allStores[k].perHourArray[j];
    }
    hourlyTotalsArray.push(hourlyTotal);
  }
  //For loop that reads how many stores there are and uses their daySum variable to calculate the total of all stores for that day
  var totalTotal = 0;
  for (var l = 0; l < allStores.length; l++){
    totalTotal += allStores[l].daySum;
  }
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    //Variable hourlyTotalsArray that was created and defined earlier in this function
    thEl.textContent = hourlyTotalsArray[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('td');
  //Variable totalTotal that was created and defined earlier in this function
  thEl.textContent = totalTotal;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
function inputHandler (event){
  event.preventDefault();
  var storeName = event.target.submitName.value;
  var inputAvgCookies = event.target.submitAvgCookies.value;
  var inputMinCust = event.target.submitMin.value;
  var inputMaxCust = event.target.submitMax.value;
  new Store(inputMinCust, inputMaxCust, inputAvgCookies, storeName);
  makeFooterRow();
}
userForm.addEventListener('submit', inputHandler);
