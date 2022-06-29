const Event = require('../models/Event');
const moment = require('moment');
const router = require('../routes/eventRoutes');


// GET all events
const event_index = (req, res) => {
    const events = Event.find({start: {
        $gte: moment(req.query.start.toDate()),
        end: {$lte: moment(req.query.end).toDate()}
    }})
    .then(result => {
        res.send(events);
    })
};

// GET single event
const event_details = (req, res) => {
    res.json({msg: 'GET single event'});
};

// GET create event
const event_create_get = (req, res) => {
    res.json({msg: 'GET create event page'});
};

// POST create event
const event_create_post = (req, res) => {
    const event = Event(req.body);
    event.save()
    .then(result => res.redirect('/events'))
    .catch(err => console.log(err));
    res.sendStatus(281);
};


// UPDATE event
const event_update = (req, res) => {
    res.json({msg: 'UPDATE event'});
};


// DELETE event
const event_delete = (req, res) => {
    res.json({msg: 'DELETE event'});
};


module.exports = {
    event_index,
    event_details,
    event_create_get,
    event_create_post,
    event_update,
    event_delete
};