angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($scope,cont1,cont2){
    $scope.cont1 = 0;
    $scope.cont2 = 0;
    //her i want to giv my counter valu
  })
  .controller('fizzbuzzCtrl', function($scope,cont1){
    //if(cont1%3 === 1){

    //}
    //her i will mack th math div on the value of my con=unter 
  })
  .controller('fozzbazzCtrl', function($scope,cont2){
   $scope.cont = 0
  return {
    
  }
  });
//   <button ng-click="count = count + 1" ng-init="count=0">
//   Increment
// </button>
// <span>
//   count: {{count}}
// </span>
  ///im sorry
