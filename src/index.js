const express = require('express');
const app = express();
const port = 3000;

// Settings
app.set('port', process.env.port || 3000 );

//Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));


//Server listening
app.listen(port, () => console.log(`Server listening on port: `,port));