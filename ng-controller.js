ngTranslate.controller('langController',['$scope', '$cookies','translationService', function ($scope, $cookies,translationService){
    // if language is not set
    if ($cookies.lang === '') {
        $cookies.lang = 'en';
    }
    // function to set a language in cookie for user preference
     $scope.translate = function(selectedLang){
	  $cookies.lang = selectedLang;
	  translationService.getTranslation($scope, $cookies.lang);
	};
    //Set to init();
	$scope.translate($cookies.lang);
}]);