let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');
let schema = mongoose.Schema(
{
  content: {
    type: String,
    required: true
  }
}
)
module.exports = mongoose.model('tasks', schema);
