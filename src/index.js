//The "type":"module" has been removed from package.json because its throwing an error

require('dotenv').config()

const fastify = require('fastify')({
    logger: true
})

// Database Connection
const mongoose = require('mongoose')
var url = process.env.DB_URI;

mongoose.connect(url)
.then(() => console.log("Mongo is ready!! "))
.catch(err => console.log(err))

const routes = require('./Routes')

fastify.get('/' , async(request, reply) => {
  reply.send('Wecome to IndoKhadyaam Server \nThis is a work in progress effort\nCurrent Version: 0.0.1\nRoutes:\nTo view data: "/recipe"\nTo update/delete: "/recipe/:id"');
}) 

routes.forEach((route,index) => {
  fastify.route(route)
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