const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions)) // run this code for every route

app.use(bodyParser.json()) 
// makes data available in req.body on a post request
// Useful with PUT, DELETE, PATCH, POST as those are the request that comes with a body

app.use(bodyParser.urlencoded({ extended: true }))
// When the body-parser middleware is set up with the option {extended: true}, 
// the application will parse this data into a JavaScript object 
// for example this name=John&age=30 becomes  { name: "John",age: "30"}
// it also allow the use of nested objects in the URL person[name]=John&person[age]=30
//{ person: {name: "John",age: "30"} }


app.get("/", (req,res) => {
    res.json({ message: " Welcome to my CRUD application"})
})

// set port and listen to request
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`)
})