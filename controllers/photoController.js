const photo = require('../models/photos');

// Display detail page of specific Photo
exports.photo_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: photo detail: ${req.params.id}`);
};

// Display Photo Create Form - GET
exports.photo_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: photo create GET`);
};

// Handle Photo Create - POST
exports.photo_create_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: photo create POST`);
};

// Display Photo Delete - GET
exports.photo_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: photo delete GET');
};

// Handle Photo Delete - POST
exports.photo_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: photo delete POST');
};