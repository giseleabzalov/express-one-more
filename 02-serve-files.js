import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
    app.use( express.json() )
    app.use( cors() )
dotenv.config()

const PORT = process.env.PORT || 3030

app.use(express.static("public"))  //anything on public folder is static

// app.get("/", (req, res) => {
//     res.send("root")
// })

// // serve images directory
// app.use("/lolcat", express.static("images"))

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} `)
})
