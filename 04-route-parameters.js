import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import data from "./data/data-mock.json" assert { type: "json"}

const app = express()
    app.use( express.json() )
    app.use( cors () )
dotenv.config()

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}`)
})

