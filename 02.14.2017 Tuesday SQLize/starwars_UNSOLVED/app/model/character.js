
var sequelize = require("sequelize");

var tableName = sequelize.define('allcharacters', {
        id: {
          type: sequelize.INTEGER
        },
        routeName: {
          type: sequelize.STRING
        },
        name: {
          type: sequelize.STRING
        },
        role: {
          type: sequelize.STRING
        },
        age: {
          type: sequelize.INTEGER
        },
        forcePoints: {
          type: sequelize.INTEGER
        },
      });



      // force: true will drop the table if it already exists
      tableName.sync().then(function () {
        // Table created
        return tableName.create({
          routeName: 'Afghanistan',
          name: 93,
          role: 'Kabul',
          age: 1919,
          forcePoints: 1919
        });
      });