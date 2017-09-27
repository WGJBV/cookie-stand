'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('stores');

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

Store.prototype.randNum = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.totalForDay = function(){
  for (var i = 0; i < hours.length; i++){
    this.daySum += (this.perHourArray[i]);
  }
  return this.daySum;
};

Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hours.length; i++){
    var numCust = this.randNum();
    this.perHourArray.push(Math.floor(numCust * this.avgCookies));
  }
};

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
  thEl.textContent = 'Total Cookies';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
makeHeaderRow();
new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac International Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki Beach');
