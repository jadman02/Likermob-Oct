 // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        initialisePayment();
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }

function initialisePayent(){
 define([], function () {
    'use strict';

    var IAP = {
        list: [ 'qwerty1234', 'qwerty12345' ],
        products: {}
    };
    var localStorage = window.localStorage || {};

    IAP.initialize = function () {
        // Check availability of the storekit plugin
        if (!window.storekit) {
            alert('In-App Purchases not available');
            return;
        }

        // Initialize
        storekit.init({
            ready:    IAP.onReady,
            purchase: IAP.onPurchase,
            restore:  IAP.onRestore,
            error:    IAP.onError
        });
    };

    IAP.onReady = function () {
        // Once setup is done, load all product data.
        storekit.load(IAP.list, function (products, invalidIds) {
            alert('IAPs loading done:');
            for (var j = 0; j < products.length; ++j) {
                var p = products[j];
                alert('Loaded IAP(' + j + '). title:' + p.title +
                            ' description:' + p.description +
                            ' price:' + p.price +
                            ' id:' + p.id);
                IAP.products[p.id] = p;
            }
            IAP.loaded = true;
            for (var i = 0; i < invalidIds.length; ++i) {
                alert('Error: could not load ' + invalidIds[i]);
            }
        });
    };

IAP.onPurchase = function (transactionId, productId, receipt) {
  if (productId === 'qwerty1234')
   // Coins.add(10);
  if (productId === 'qwerty12345')
    //Coins.add(100);
  alert('Congratulation, you now own a coin');
};
 
IAP.onError = function (errorCode, errorMessage) {
  alert('Error: ' + errorMessage);
};

    IAP.buy = function (productId, callback) {
        IAP.purchaseCallback = callback;
        storekit.purchase(productId);
    };

var renderIAPs = function (el) {
  if (IAP.loaded) {
    var coins10  = IAP.products["cc.fovea.coins10"];
    var coins100 = IAP.products["cc.fovea.coins100"];
    var html = "<ul>";
    for (var id in IAP.products) {
      var prod = IAP.products[id];
      html += "<li>" + 
       "<h3>" + prod.title + "</h3>" +
       "<p>" + prod.description + "</p>" +
       "<button type='button' " +
       "onclick='IAP.buy(\"" + prod.id + "\")'>" +
       prod.price + "</button>" +
       "</li>";
    }
    html += "</ul>";
    el.innerHTML = html;
  }
  else {
    el.innerHTML = "In-App Purchases not available.";
  }
};
 
renderIAPs(document.getElementById('in-app-purchase-list'));

    return IAP;
 
}
