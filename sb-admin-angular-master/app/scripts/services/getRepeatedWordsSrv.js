
// "use strict";

angular.module('sbAdminApp')
   .factory('getWordsSrv', [function() {

	   	return function(text, pattern) {

	        var defaultValues = {
	            "pattern" : /[a-z']{2,}/ig,            
	        }

	        var pattern = pattern || defaultValues.pattern,  
	            matchesArr = text.match(pattern);
	        
	        return findMultipleRepeatedWords(getWordsRepeatNumber(matchesArr));

	        /**@func
	        *@param Array of words 
	        *@return type Object with key = word and obj[key] = repeatedCounter 
	        **/
	        function getWordsRepeatNumber(array) {
	            var result = {};

	            for (var i = 0; i < array.length; i++) {
	                array[i] = array[i].toLowerCase();
	                if (array[i] in result) {
	                    result[ array[i] ] += 1;
	                } else {
	                    result[ array[i] ] = 1;
	                }
	            };
	            return result;
	        };

	        function findMultipleRepeatedWords (obj) {
	            var result = {
	            			"words" : [],
	            			"numbers" : []
	            		};

	            for (var key in obj) {
	                if ( obj[key] > 1 ) {
	                    (function () {
	                        result.words.push(key);
	                        result.numbers.push(obj[key]);
	                    })();
	                }
	            }

	            return result;
	        }
	    }
	}]);

