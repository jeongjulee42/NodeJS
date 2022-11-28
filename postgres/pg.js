const knex = require('./knex/knex.js');

// Create Table

knex.schema.createTable('book', function (table){
    table.increments();
    table.string('name');
}).finally(function () {
    console.log("Done");
})

