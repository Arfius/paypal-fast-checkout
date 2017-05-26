# paypal-fast-checkout
Angularjs Directive to create a paypal checkout button.

## Installation

```sh
npm install https://github.com/Arfius/paypal-fast-checkout.git
```

## USAGE

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
```html
  <script src="node_modules/angular/angular.js"></script>
  <script src="node_modules/underscore/underscore-min.js"></script>
  <script src="node_modules/paypal-fast-checkout/dist/paypal-fast-checkout.js"></script>
  <script src="https://www.paypalobjects.com/api/checkout.js"></script>
  <paypal-fast-checkout config="paypal" callbacksuccess="_create"></paypal-fast-checkout>
```
