var app = angular.module('calendarApp', []);

app.controller('CalendarController', function($scope) {
  var currentDate = new Date();
  $scope.currentYear = currentDate.getFullYear();
  $scope.currentMonth = currentDate.getMonth();
  $scope.currentDay = currentDate.getDate();

  $scope.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  $scope.days = [];

  $scope.generateCalendar = function() {
    var monthDays = new Date($scope.currentYear, $scope.currentMonth + 1, 0).getDate();
    var firstDayOfWeek = new Date($scope.currentYear, $scope.currentMonth, 1).getDay();

    $scope.days = [];

    for (var i = 1; i <= monthDays; i++) {
      var dayOfWeek = new Date($scope.currentYear, $scope.currentMonth, i).getDay();
      var dayObject = {
        day: i,
        events: [] 
      };
      $scope.days.push(dayObject);
    }

    for (var j = 0; j < firstDayOfWeek; j++) {
      $scope.days.unshift({});
    }
  };

  $scope.generateCalendar();

  $scope.currentMonthName = function() {
    return new Date($scope.currentYear, $scope.currentMonth, 1).toLocaleString('en-us', { month: 'long' });
  };

  $scope.isToday = function(day) {
    return day === $scope.currentDay && $scope.currentMonth === currentDate.getMonth() && $scope.currentYear === currentDate.getFullYear();
  };

  $scope.isSelected = function(day) {
    return day === $scope.selectedDay;
  };

  $scope.selectDate = function(day) {
    $scope.selectedDay = day;
  };

  $scope.previousMonth = function() {
    if ($scope.currentMonth === 0) {
      $scope.currentYear--;
      $scope.currentMonth = 11;
    } else {
      $scope.currentMonth--;
    }
    $scope.generateCalendar();
  };

  $scope.nextMonth = function() {
    if ($scope.currentMonth === 11) {
      $scope.currentYear++;
      $scope.currentMonth = 0;
    } else {
      $scope.currentMonth++;
    }
    $scope.generateCalendar();
  };
});
var app = angular.module('calendarApp', []);

app.controller('CalendarController', function($scope) {
  var currentDate = new Date();
  $scope.currentYear = currentDate.getFullYear();
  $scope.currentMonth = currentDate.getMonth();
  $scope.currentDay = currentDate.getDate();

  $scope.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  $scope.days = [];

  $scope.generateCalendar = function() {
    var monthDays = new Date($scope.currentYear, $scope.currentMonth + 1, 0).getDate();
    var firstDayOfWeek = new Date($scope.currentYear, $scope.currentMonth, 1).getDay();

    $scope.days = [];

    for (var i = 1; i <= monthDays; i++) {
      var dayOfWeek = new Date($scope.currentYear, $scope.currentMonth, i).getDay();
      var dayObject = {
        day: i,
        events: [] 
      };
      $scope.days.push(dayObject);
    }

    for (var j = 0; j < firstDayOfWeek; j++) {
      $scope.days.unshift({});
    }
  };

  $scope.generateCalendar();

  $scope.currentMonthName = function() {
    return new Date($scope.currentYear, $scope.currentMonth, 1).toLocaleString('en-us', { month: 'long' });
  };

  $scope.isToday = function(day) {
    return day === $scope.currentDay && $scope.currentMonth === currentDate.getMonth() && $scope.currentYear === currentDate.getFullYear();
  };

  $scope.isSelected = function(day) {
    return day === $scope.selectedDay;
  };

  $scope.selectDate = function(day) {
    $scope.selectedDay = day;
  };

  $scope.scheduleEvent = function(eventText) {
    if ($scope.selectedDay) {
      $scope.selectedDay.events.push(eventText);
    }
  };

  $scope.previousMonth = function() {
    if ($scope.currentMonth === 0) {
      $scope.currentYear--;
      $scope.currentMonth = 11;
    } else {
      $scope.currentMonth--;
    }
    $scope.generateCalendar();
  };

  $scope.nextMonth = function() {
    if ($scope.currentMonth === 11) {
      $scope.currentYear++;
      $scope.currentMonth = 0;
    } else {
      $scope.currentMonth++;
    }
    $scope.generateCalendar();
  };
});
