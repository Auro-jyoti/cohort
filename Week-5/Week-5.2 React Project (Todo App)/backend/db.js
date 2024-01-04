const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:testpwd@cluster0.mabqas5.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: string,
  description: string,
  completed: Boolean,
});


const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo,
}