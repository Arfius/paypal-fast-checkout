# paypal-fast-checkout
Angularjs Directive to create a paypal checkout button.

## Installation

```sh
npm install https://github.com/Arfius/paypal-fast-checkout.git
```

## Get Started

Include the paypal-fast-checkout dependency on your Angular module:

```js
var app = angular.module("example", ['paypalFastCheckoutDirective']);
```
Include the dependencies

```html
 <script src="node_modules/angular/angular.js"></script>
 <script src="node_modules/underscore/underscore-min.js"></script>
 <script src="node_modules/paypal-fast-checkout/dist/paypal-fast-checkout.js"></script>
```
Create the configuration variable as ```$scope.paypal``` below and the callback as ```_create```. This callback will be fired after the payment procedure. 

```js
$scope.paypal=
{
    sandbox:'xxxx',
    production:'',
    price:'10',
    currency:'EUR',
    symbol:'€',
    id:'club',
    show:'true'
}
var function= _create(data,action)
{
	//process data...
}
```
Then, delclare the directive:

```html
  <paypal-fast-checkout config="paypal" callbacksuccess="_create"></paypal-fast-checkout>
```

Check the example in ```example``` directory. Run the example with 

```
cd example
npm install
```