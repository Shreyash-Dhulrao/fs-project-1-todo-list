import mongoose, { mongo } from "mongoose";

const todoData = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    }, 
    description: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    time: {
        type: String,
        require: true,
    }
});

const todoSchema = mongoose.model("Todo_list", todoData);

export default todoSchema;