 // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
       
      window.storekit.init({

    debug: true, /* Because we like to see logs on the console */

    purchase: function (transactionId, productId) {
        console.log('purchased: ' + productId);
    },
    restore: function (transactionId, productId) {
        console.log('restored: ' + productId);
    },
    restoreCompleted: function () {
       console.log('all restore complete');
    },
    restoreFailed: function (errCode) {
        console.log('restore failed: ' + errCode);
    },
    error: function (errno, errtext) {
        console.log('Failed: ' + errtext);
    },
    ready: function () {
        var productIds = [
            "cc.fovea.coins10", 
            "cc.fovea.coins100"
        ];
        window.storekit.load(productIds, function(validProducts, invalidProductIds) {
            $.each(validProducts, function (i, val) {
                alert("id: " + val.id + " title: " + val.title + " val: " + val.description + " price: " + val.price);
            });
            if(invalidProductIds.length) {
                alert("Invalid Product IDs: " + JSON.stringify(invalidProductIds));
            }
        });
    }
});
       
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

