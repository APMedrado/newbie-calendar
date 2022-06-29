const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');

// Express app
const app = express();

// Connect to MongoDB and listen for requests
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
}))
.catch(err => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Middleware
// app.use(express.urlencoded({extended: true})); // Pass data into workable format (for POST requests)
app.use(express.json());
app.use(morgan('dev')); // Logging requests
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// Routes and redirects
app.get('/', (req, res) => {
    res.redirect('/events');
})
app.use('/events', eventRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});