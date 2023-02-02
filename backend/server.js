const express = require('express');
const axios = require('axios');
const app = express()

console.log(axios);

app.get('/', (req,res) => {
    res.send("working server")
})

app.listen(5000, () => {
    console.log("Server is listening on 5000");
})