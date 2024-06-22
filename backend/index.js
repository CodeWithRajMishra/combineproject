const express= require("express");
const cors= require("cors");
const app = express();

app.use(cors({
  origin: 'https://combineproject.vercel.app'
}));

app.get("/api", (req, res)=>{

    try {
         res.status(200).json("This is Backend server Data!");
    } catch (error) {
         res.status(400).json("this is Error in server!!!");
    }
})
app.listen(8000, ()=>{
    console.log("Server run on PORT : 8000");
})
