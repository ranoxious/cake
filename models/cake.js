

// Node Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var cake = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(cake_name, callback){
    orm.insertOne(cake_name, function(res){
      callback(res);
    });
  },

  updateOne: function(cake_id, callback){
    orm.updateOne(cake_id, function(res){
      callback(res);
    });
  }

};


// Export at the end of the cake.js file.
module.exports = cake;