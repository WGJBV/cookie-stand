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
new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac International Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki Beach');

/*
var alki = {

  minCustomers : 2,
  maxCustomers : 16,
  avgCookies : 4.6,
  location : 'Alki Beach',

  randNum : function(){
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function () {
    var perHourArray = [];
    for (var i in hours){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function () {
    var daySum = 0;
    for (var i in hours){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },

  render : function (){
    for (var i in this.cookiesPerHour()){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('alki');
      pikeUl.appendChild(liEl);
    }

    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }
};

pike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alki.render(); */
