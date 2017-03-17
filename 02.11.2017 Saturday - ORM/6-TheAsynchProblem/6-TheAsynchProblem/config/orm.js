var connection = require("../config/connection.js");
var ret_val = "whateve";
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      //console.log(result);
      if(cb) cb(result);
      return ret_val;// = result;
    });
  }
  ,
    selectWherewpromise: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //new promise
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      //console.log(result);
      if(cb) cb(result);
      return ret_val;// = result;
    });
  }

};

module.exports = orm;
