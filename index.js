require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/contact");
const mongoURL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const app = express();
mongoose.connect(mongoURL, { useNewUrlParser: true });

let contacts = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

app.use(express.static("build"));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/contacts", (_, res) => {
  Contact.find({})
    .then(contacts => res.json(contacts))
    .catch(error => next(error));
});

app.get("/api/contacts/:id", (req, res) => {
  Contact
    .findById(req.params.id)
    .then(contact => {
      return contact ? res.json(contact) : res.status(404).end();
    })
    .catch(error => next(error));
});

app.delete("/api/contacts/:id", (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(_ => res.status(204).end())
    .catch(error => next(error));
});

app.post("/api/contacts", (req, res, next) => {
  const body = req.body;

  const contact = new Contact({
    name: body.name,
    number: body.number
  });

  contact.save()
    .then(savedContact => savedContact.toJSON())
    .then(savedAndFormattedNote => res.json(savedAndFormattedNote))
    .catch(error => next(error));
});

app.put("/api/contacts/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const contact = { name: body.name, number: body.number };

  Contact.findByIdAndUpdate(id, contact, { new: true })
    .then(updatedContact => res.json(updatedContact))
    .catch(error => next(error));
});

app.get("/info", (req, res) => {
  const html = `
    <div><p>Your phonebook has ${contacts.length} contacts.<p></div>
    <div>(${new Date().toDateString()})</div>`
  res.send(html);
});

app.use((req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
});

app.use((error, req, res, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
