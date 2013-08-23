'use strict';

/* Controllers */

function CtrlForm($scope) {
  $scope.updateOptions = function () {
  	var input = $scope.email;
    $scope.glm = $scope.email.endsWithGlm(input);
    $scope.outlook = $scope.email.endsWithOutlook(input);
    $scope.google = $scope.email.endsWithGoogle(input);
    $scope.yahoo = $scope.email.endsWithYahoo(input);
  }
}