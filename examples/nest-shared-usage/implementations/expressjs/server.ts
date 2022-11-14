#!/usr/bin/env node
import { configService } from 'nest-shared'
import express, { Router } from 'express'

const app = express()
const router = Router()

router.get("/", (req, res) => {
    return res.send("Test")
})

app.use(router)
const port = configService.getPort()

app.listen(port, () => {
    process.stdout.write(`ExpressJs is running on port ${port}\n`)
    setInterval(() => {
        process.exit(0)
    }, 1000)
})

