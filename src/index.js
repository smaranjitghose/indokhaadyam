const dotenv = require('dotenv').config()

const fastify = require('fastify')({
    logger: true
})
// database
const mongoose = require('mongoose')

// db connection
mongoose.connect(process.env.DB_URI)
.then(() => console.log('Mongo connection is working!'))
.catch(err => console.log(err))

fastify.get('/' , async(request, reply) => {
    return {user: 'Hello User!'}
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