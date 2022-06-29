const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router.get('/', eventController.event_index);
router.post('/', eventController.event_create_post);
router.get('/create', eventController.event_create_get);
router.get('/:id', eventController.event_details);
router.patch('/:id', eventController.event_update);
router.delete('/:id', eventController.event_delete);

module.exports = router;