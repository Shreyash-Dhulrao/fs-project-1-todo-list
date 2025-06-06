import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import todoSchema from './schema/todo_schema.js';

dotenv.config();
connectDb();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req , resp) =>{
    resp.send("Server Started Successfully");
})

app.post("/api/todolist", async (req, resp) => {
    const listItem = req.body;

    if(!listItem.title || !listItem.description || !listItem.date || !listItem.time){
        return resp.status(500).json({"Status": false, "Message": "Enter All the Fields" });
    }

    const newItem = new todoSchema(listItem);

    try {
        await newItem.save();
        return resp.status(200).json({"Status": true , "Message": "Todo Item Added Successfully"});
    } catch (error) {
        return resp.status(500).json({"Status": 500 , "Message": "Cant Save Data Right Now"});
        
    }
})

app.listen(port , async ()=> {
    console.log("Server is running on port: ", port);
})