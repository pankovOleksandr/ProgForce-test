'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
   .controller('ChartCtrl', ['$scope', '$timeout', 'getWordsSrv', function ($scope, $timeout, getWordsSrv) {

    $scope.text = "ProgForce, more than anything else, is a league of extraordinary talent - sought, refined, and dedicated to providing the most impeccable intelligence and service. Our team of professional software developers are specially chosen through a process of selection based not only on training, but conception and creative application. Our people don't just plug in the numbers. Our people create custom solutions for custom needs.";
    
    var words = getWordsSrv($scope.text).words;
    var repeatedNumbers = getWordsSrv($scope.text).numbers;

    // $scope.findWords = function (text) {
    //     console.log("text", text);
    //     words = getWordsSrv(text).words;
    //     console.log("words", words);
    //     repeatedNumbers = getWordsSrv(text).numbers;
    //     console.log("repeatedNumbers", repeatedNumbers);
    // }
    
     $scope.line = {
        labels: words,
        series: ['Series A'],
        data: [repeatedNumbers],
        onClick: function (points, evt) {
          console.log(points, evt);
        }
    };

    $scope.bar = {
        labels: words,
        series: ['Series A'],

        data: [
           repeatedNumbers
        ]
        
    };

    $scope.donut = {
        labels:words,
        data: repeatedNumbers
    };

    $scope.radar = {
        labels:words,

        data:[
            repeatedNumbers,
        ]
    };

    $scope.pie = {
        labels :words,
        data : repeatedNumbers
    };
    

    $scope.polar = {
        labels : words,
        data : repeatedNumbers
    };

    $scope.dynamic = {
        labels : words,
        data : repeatedNumbers,
        type : 'PolarArea',

        toggle : function () 
        {
            this.type = this.type === 'PolarArea' ?
            'Pie' : 'PolarArea';
        }
    };
}]);