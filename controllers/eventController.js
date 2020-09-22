const Event = require('../models/events');
const { body } = require('express-validator');

// Calender Page - Event List
exports.calender = (req, res) => {
    res.send('NOT IMPLEMENTED: Calender');
};

// Display detail page of specific event
exports.event_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: Event detail: ${req.params.id}`);
};

// Display Event Create Form - GET
exports.event_create_get = (req, res) => {
    res.render('event_form', { title: 'New Event' });
};

// Handle Event Create - POST
exports.event_create_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: Event create POST`);
};

// Display Event Delete - GET
exports.event_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Event delete GET');
};

// Handle Event Delete - POST
exports.event_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Event delete POST');
};

// Display Event Update - GET
exports.event_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Event update GET');
};

// Handle Event Update - POST
exports.event_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Event update POST');
};