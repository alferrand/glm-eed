'use strict';

/* Controllers */

function CtrlForm($scope) {
  $scope.updateOptions = function () {
    $scope.glm = $scope.email.endsWith('@glm.edu.co');
  }
}