const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const baseURL = "http://localhost:3001"
const app = express();
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

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (_, res) => {
  res.redirect(`${baseURL}/api/contacts`);
})

app.get("/api/contacts", (_, res) => {
  res.json(contacts);
});

app.get("/api/contacts/:id", (req, res) => {
  const id = +req.params.id;
  const contact = contacts.find(c => c.id === id);
  contact ? res.json(contact) : res.status(404).end();
});

app.delete("/api/contacts/:id", (req ,res) => {
  const id = +req.params.id;
  contacts = contacts.filter(c => c.id !== id);
  res.status(204).end();
});

app.post("/api/contacts", (req, res) => {
  let contact = req.body;
  if (!contact.name || !contact.number || contacts.find(c => c.name === contact.name)) {
    return res.status(400)
              .json({error: "invalid content"});    
  }

  contact.id = Math.round(Math.random() * 10000);
  contacts.push(contact);
  res.json(contact);
});

app.put("/api/contacts/:id", (req, res) => {
  const id = +req.params.id;
  let contact = contacts.find(c => c.id === id);
  
  if (!contact) return res.status(404).json({error: "contact not found"})
  
  Object.assign(contact, req.body);
  res.json(contact);
})

app.get("/info", (req, res) => {
  const html = `
    <div><p>Your phonebook has ${contacts.length} contacts.<p></div>
    <div>(${new Date().toDateString()})</div>`
  res.send(html);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
