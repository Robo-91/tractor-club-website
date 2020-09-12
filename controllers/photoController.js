const Photos = require('../models/photos');

// Gallery of Photos
exports.photo_gallery = (req, res) => {
    res.send('NOT IMPLEMENTED: Photo Gallery');
};

// Display detail page of specific Photo
exports.photos_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: Photos detail: ${req.params.id}`);
};

// Display Photo Create Form - GET
exports.photos_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: Photos create GET`);
};

// Handle Photo Create - POST
exports.photos_create_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: Photos create POST`);
};

// Display Photo Delete - GET
exports.photos_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Photos delete GET');
};

// Handle Photo Delete - POST
exports.photos_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Photos delete POST');
};

// Display Photo Update - GET
exports.photos_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Photos update GET');
};

// Handle Photo Update - POST
exports.photos_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Photos update POST');
};