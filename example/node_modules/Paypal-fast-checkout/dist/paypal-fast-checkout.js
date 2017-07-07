/**
 * Created by alfonso on 26/05/17.
 */


angular.module('paypalFastCheckoutDirective',[]).
directive('paypalFastCheckout',[ function() {
    return {
        restrict: 'E',
        template: '<div ng-show="config.show" id="paypal-button-{{config.id}}"></div>',
        scope:{
            callbacksuccess:'&',
            config:"=",
            show:"="
        },link:function(scope,ele,att)
        {
            var loaded=false;
            function loadPaypal()
            {
                paypal.Button.render({

                    env: 'sandbox', // Optional: specify 'sandbox' environment

                    client: {
                        sandbox:    scope.config.sandbox,
                        production: scope.config.production
                    },
                    locale: 'it_IT',
                    style: {
                        size: 'responsive',
                        shape: 'rect',
                        color:'blue'
                    },

                    payment: function() {

                        var env    = this.props.env;
                        var client = this.props.client;

                        return paypal.rest.payment.create(env, client, {
                            transactions: [
                                {
                                    amount: { total: scope.config.price, currency: scope.config.currency }
                                }
                            ]
                        });
                    },

                    commit: true,

                    onAuthorize: function(data, actions)
                    {
                        return actions.payment.execute().then(function() {
                            scope.callbacksuccess()(data,actions);
                        });
                    }

                }, '#paypal-button-'+scope.config.id);
            }

            scope.$watch('config',function(newv,oldv)
            {
                if(!_.isUndefined(newv)&&!loaded)
                {
                    loaded=true
                    loadPaypal();

                }
            })
        }
    }
}]);
