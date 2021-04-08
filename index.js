const express = require('express');

// init server
const app = express();



const PORT = process.env.PORT || 4000;
app.listen(() => {
    console.log(`Server running on Port: ${PORT}`);
})