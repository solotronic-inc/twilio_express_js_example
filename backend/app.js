// app.js (this is the express server)

// import epxress and the database
const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors')

// create the express server
const app = express();

app.use(express.json())

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// init middlewares
// Init Middleware
app.use(express.json({ extended: false }));

const port = 3001; //process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
app.get('/', (req, res) => res.send('Hello API'));

// connect the routes to endpoint specified
const routes = require('./routes/api/data_routes.js'); // import the routes defined in records
app.use('/api', routes); // use /api as the base endpoint path, and routes defined in records 