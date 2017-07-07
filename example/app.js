var app = angular.module("example", ['paypalFastCheckoutDirective']);
app.controller('mainCtrl', ['$scope',function($scope)
{
  $scope.paypal=
  {
      sandbox:'ASrx_zl1w4i-Kirmj3F-Byb7uLE4XkxnLDzAKs3zBsbmhdcILQNC1JWjFEb_B20c9Qn3lQjrMxfMsVfR',
      production:'',
      price:'10',
      currency:'EUR',
      symbol:'€',
      id:'example',
      show:'true',
      env:'sandbox'
  }

  var _create= function(data,action)
  {
  	//process data...
  }

}]);
