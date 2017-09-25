'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {

  minCustomers : 23,
  maxCustomers : 65,
  avgCookies : 6.3,
  location : '1st and Pike',


  randNum : function (){
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function (){
    var perHourArray = [];
    for (var i = 0; i < hours.length; i++){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function (){
    var daySum = 0;
    for (var i = 0; i < hours.length; i++){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },
  render : function (){
    console.log('why, what');
    for (var i = 0; i < (this.cookiesPerHour()).length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
    }
    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }
};

var seaTac = {

  minCustomers : 3,
  maxCustomers : 24,
  avgCookies : 1.2,
  location : 'SeaTac International Airport',

  randNum : function() {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function() {
    var perHourArray = [];
    for (var i = 0; i < hours.length; i++){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function() {
    var daySum = 0;
    for (var i = 0; i < hours.length; i++){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },
  render : function (){
    for (var i = 0; i < (this.cookiesPerHour()).length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('seaTac');
      pikeUl.appendChild(liEl);
    }
    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }

};

var seaCenter = {

  minCustomers : 11,
  maxCustomers : 38,
  avgCookies : 3.7,
  location : 'Seattle Center',

  randNum : function(){
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function () {
    var perHourArray = [];
    for (var i = 0; i < hours.length; i++){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function () {
    var daySum = 0;
    for (var i = 0; i < hours.length; i++){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },
  render : function (){
    for (var i = 0; i < (this.cookiesPerHour()).length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('seaCenter');
      pikeUl.appendChild(liEl);
    }
    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }
};

var capHill = {

  minCustomers : 20,
  maxCustomers : 38,
  avgCookies : 2.3,
  location : 'Capitol Hill',

  randNum : function(){
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function () {
    var perHourArray = [];
    for (var i = 0; i < hours.length; i++){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function () {
    var daySum = 0;
    for (var i = 0; i < hours.length; i++){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },
  render : function (){
    for (var i = 0; i < (this.cookiesPerHour()).length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('capHill');
      pikeUl.appendChild(liEl);
    }
    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }
};

var alki = {

  minCustomers : 2,
  maxCustomers : 16,
  avgCookies : 4.6,
  location : 'Alki Beach',

  randNum : function(){
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return random;
  },

  cookiesPerHour : function () {
    var perHourArray = [];
    for (var i = 0; i < hours.length; i++){
      perHourArray[i] = Math.floor(this.randNum() * this.avgCookies);
    }
    return perHourArray;
  },

  totalForDay : function () {
    var daySum = 0;
    for (var i = 0; i < hours.length; i++){
      daySum += (this.cookiesPerHour())[i];
    }
    return daySum;
  },
  render : function (){
    for (var i = 0; i < (this.cookiesPerHour()).length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + (this.cookiesPerHour())[i];
      var pikeUl = document.getElementById('alki');
      pikeUl.appendChild(liEl);
    }
    liEl.textContent = 'Total for the Day was ' + this.totalForDay() + '.';
    pikeUl.appendChild(liEl);
  }
};
