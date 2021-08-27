const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

console.log("connecting to ", url);

mongoose.connect(url, {useNewUrlParser:true})
        .then(res => console.log('connected to MongoDB'))
        .catch(err => console.log('error connecting to MongoDB:', err.message));

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [1, "Please enter a name"],
    required: true,
  },
  number: {
    type: String,
    minLength: [10, "Number must be at least 10 chars long"],
    required: true,
  }
});

contactSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  }
});

module.exports = mongoose.model("Contact", contactSchema);