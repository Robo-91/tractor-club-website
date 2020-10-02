const Album = require('../models/album');

// Gallery of Photos
exports.photo_gallery = (req, res, next) => {
    Album.find()
        .exec(function(err, list_album) {
            if(err) { return next(err); }
            res.render('album_list', { title: 'Photo Gallery', list_album: list_album });
        });
};

// Display detail page of specific Album
exports.album_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: album detail: ${req.params.id}`);
};

// Display Album Create Form - GET
exports.album_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: album create GET`);
};

// Handle Album Create - POST
exports.album_create_post = (req, res) => {
    res.send(`NOT IMPLEMENTED: album create POST`);
};

// Display Album Delete - GET
exports.album_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: album delete GET');
};

// Handle Album Delete - POST
exports.album_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: album delete POST');
};

// Display Album Update - GET
exports.album_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: album update GET');
};

// Handle Album Update - POST
exports.album_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: album update POST');
};