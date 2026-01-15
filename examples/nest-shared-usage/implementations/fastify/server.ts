#!/usr/bin/env node
import { configService } from 'nest-shared'
import Fastify from 'fastify'
 

const fastify = Fastify({
    logger: true
})

fastify.get("/", (req, res) => {
    return res.send("Test")
})

const port = configService.getPort()

fastify.listen({ port }, () => {
    process.stdout.write(`Fastify is running on port ${port}\n`)
    setInterval(() => {
        process.exit(0)
    }, 1000)
})
