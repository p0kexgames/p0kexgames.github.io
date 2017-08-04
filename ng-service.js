ngTranslate.service('translationService', function($resource) {	
        this.getTranslation = function($scope, language) {
            var languageFilePath ='language-files/'+language+'.json';// to load selected language file from directory
            $resource(languageFilePath).get(function (data) {
                $scope.translation = data;
            });
        };
    });