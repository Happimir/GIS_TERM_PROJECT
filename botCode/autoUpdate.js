var fs = require('fs');

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'f3550111-bd50-4e5f-8d44-8f0cc493c05e',
  'password': 'XSG0rEW0UOlB',
  'version_date': '2017-02-27'
});


var parameters = {
  'text': 'A most interesting and amusing text indeed, about as amusing as IBMs godawful documentation',

  'features': {
    'entities': {
      'emotion': false,
      'sentiment': true,
      'limit': 1
    },
    'keywords': {
      'emotion': false,
      'sentiment': true,
      'limit': 2
    }
  }
}


var mysql = require("mysql");
var async = require("async");
var dbSize;

/*
    The idea of this function is simple, it will keep running and it will test to see the size of the database. If the database size is changed then it will know that new data 
    has been added, and that we need update what we have. 
*/
function checkDataBaseSize() {
    
    fs.readFile('databasesize.txt', 'utf8', function (err, data) {
       
        if(err) {
            console.log("Error Reading File: " + err);
        } else {
            dbSize = parseInt(data, 10);
            console.log("DbSize: " + dbSize);
        }
        
    });
    
}

checkDataBaseSize();
