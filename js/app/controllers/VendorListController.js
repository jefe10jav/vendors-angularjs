app.controller('VendorListController', ['$scope', 'VendorService', function ($scope, VendorService) {

    $scope.firstVisit = true;
    $scope.vendors = [];
    $scope.vendorDetails = null;
    $scope.error = null;

    $scope.getVendorList = function () {
        $scope.error = null;
        VendorService.getVendorsList().then(function (data) {
            $scope.vendors = data.data;
            if ($scope.vendors.length > 0) {
                $scope.getVendorsDetail(data.data[0].VendorID);
            }
        }, function (error) {
            $scope.error = error;
        });
    }

    $scope.getVendorsDetail = function (vendorId) {
        $scope.error = null;
        VendorService.getVendorsDetail(vendorId).then(function (data) {
            console.log(data);
            data.data.BizData = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
            $scope.vendorDetails = data.data;
            $scope.checkFisrtVisit();
        }, function (error) {
            $scope.error = error;
            $scope.checkFisrtVisit();
        });
    }

    $scope.checkFisrtVisit = function () {
        var sidemenu = document.querySelectorAll('.sidenav');

        //If is a fisrt visit we open the side nav
        if ($scope.firstVisit) {
            $scope.firstVisit = false;
            //Open side menu
            M.Sidenav.getInstance(sidemenu[0]).open();
        } else {
            //Close side menu
            M.Sidenav.getInstance(sidemenu[0]).close();
        }
    }

    $scope.closeSideNav = function () {
        var sidemenu = document.querySelectorAll('.sidenav');
        //Close side menu
        M.Sidenav.getInstance(sidemenu[0]).close();
    }

    $scope.getVendorList();

}]);