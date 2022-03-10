//The "type":"module" has been removed from package.json because its throwing an error

require('dotenv').config()

const fastify = require('fastify')({
    logger: true
})

// Database Connection
const mongoose = require('mongoose')
var my_collection = ""

var MongoClient = require('mongodb').MongoClient;
var url = process.env.DB_URI;

MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");
  var collection = db.collection('recipe');
  console.log("Go to localhost:3000 to view data");

  collection.find({}).toArray(function(err, result) {
    my_collection = JSON.stringify(result, null, 2);
    db.close();
  });
});

fastify.get('/' , async(request, reply) => {
    return my_collection
})

const start = async () => {
    try{
        await fastify.listen(3000)
        fastify.log.info('Fastify works!')
    }
    catch (error){

    }
}

start()