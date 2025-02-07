import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true //Ensures the backend can recognize who is making the request by cookies,tokens or authentication details and provide data accordingly.
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))//this is required if my backend parse incoming form data, extended: true allows nested objects (like { user: { name: "Anik", age: 22 } }), while false would only allow simple key-value pairs.
app.use(express.static("public"))//Hey, there's a folder called public, and anything inside it can be accessed by users directly! like this http://yourserver.com/image.jpg if you have a file public/image.jpg
app.use(cookieParser())

export {app}