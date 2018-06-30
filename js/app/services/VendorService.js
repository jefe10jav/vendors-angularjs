app.service('VendorService', function ($http, $q, API_URL) {

    this.getVendorsList = function () {
        var defer = $q.defer()

        //Call to the web service
        $http.get(API_URL + '/api/vendor')
            .then(function (result) {
                defer.resolve(result.data);
            }, function (error) {
                posts = error;
                defer.reject(error);
            });

        //Return a promise
        return defer.promise
    }


    this.getVendorsDetail = function (vendorId) {
        var defer = $q.defer()

        //Call to the web service
        $http.get(API_URL + '/api/vendor/show/' + vendorId)
            .then(function (result) {
                defer.resolve(result.data);
            }, function (error) {
                posts = error;
                defer.reject(error);
            });

        //Return a promise
        return defer.promise
    }

});
