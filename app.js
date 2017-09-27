'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

function Store (minCustomers, maxCustomers, avgCookies, location){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.location = location;
  this.perHourArray = [];
  allStores.push(this);
};

Store.prototype.randNum = function(){
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};
/*
Store.prototype.totalForDay = function(){
  var daySum = 0;
  for (var i in hours){
    daySum += (cookiesPerHour())[i];
  }
  allStores.push(daySum);
};
*/
Store.prototype.cookiesPerHour = function() {
  for (var i in hours){
    this.perHourArray[i].push(Math.floor(randNum() * this.avgCookies));
  }
};

new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac International Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki Beach');
console.log(allStores);
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
