app.controller('VendorListController', ['$scope', 'VendorService', function ($scope, VendorService) {

    $scope.vendors = [];
    $scope.vendorDetails = null;
    $scope.error = null;


    VendorService.getVendorsList().then(function (data) {
        $scope.vendors = data.data;
    }, function (error) {
        $scope.error = error;
    });


    $scope.getVendorsDetail = function (vendorId) {
        var sidemenu = document.querySelectorAll('.sidenav');

        VendorService.getVendorsDetail(vendorId).then(function (data) {
            $scope.vendorDetails = data.data;
            console.log($scope.vendorDetails);
            
            
            //Close side menu
            M.Sidenav.getInstance(sidemenu[0]).close();
        }, function (error) {
            $scope.error = error;

            //Close side menu
            M.Sidenav.getInstance(sidemenu[0]).close();
        });
    }


}]);