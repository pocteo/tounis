const express = require('express')
const Mapper = require('./mapper')
const Contacts = require('./datas/contacts')
const app = express()

app.get('/api/contacts', function (req, res) {
    res.setHeader('Content-Type', 'application/json')

    const data = Mapper.convert(Contacts)

    res.send(data)
});

app.listen(3000)
