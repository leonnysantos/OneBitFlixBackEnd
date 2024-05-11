import express from 'express'
import cors from 'cors'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminJS'
import { router } from './routes'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(router)

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000

app.listen(PORT, async () => {
    await sequelize.authenticate().then(() => {
        console.log('DB connection successfull.')
    })

    console.log(`Server started successfuly at port ${PORT}.`)
})