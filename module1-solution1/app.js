/** MINIFIED **/
!function(){"use strict";function n(n){n.checkLunchItems=function(){var e=",",c=0,t=n.lunchItem;return null==t?void(n.displayMsg="Please enter data first!"):(c=t.split(e).length,void(3>=c?n.displayMsg="Enjoy!":n.displayMsg="Too Much!"))}}angular.module("LunchCheck",[]).controller("LunchCheckController",n),n.$inject=["$scope"]}();

/** ORIGINAL - NOT MINIFIED **/
// (function(){
// 'use strict';
//
// angular.module('LunchCheck', [])
// .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController($scope){
//   $scope.checkLunchItems = function() {
//     var separator = ",";
//     var lunchItemsLength = 0;
//     var lunchMenuList =  $scope.lunchItem;
//
//     if(lunchMenuList == null){
//       $scope.displayMsg = "Please enter data first!";
//       return;
//     } else {
//      lunchItemsLength = lunchMenuList.split(separator).length;
//     }
//
//     if (lunchItemsLength <= 3){
//       $scope.displayMsg = "Enjoy!";
//     } else {
//       $scope.displayMsg = "Too Much!";
//     }
//
//   };
// }
//
// })
// ();
