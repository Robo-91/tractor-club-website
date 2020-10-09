const Album = require('../models/album');
const Photo = require('../models/photos');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set storage - Multer
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

function checkFileType(file, cb) {
    // allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    // check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

// Gallery of Photos
exports.photo_gallery = (req, res, next) => {
    Album.find()
        .exec(function(err, list_album) {
            if(err) { return next(err); }
            res.render('album_list', { title: 'Photo Gallery', list_album: list_album });
        });
};

// Display detail page of specific Album
exports.album_detail = async (req, res, next) => {
    try {
        const findAlbum = await Album.findById(req.params.id);
        const photos = await Photo.find().populate({ path: 'album' });
        const albumPhotos = await photos.filter(function(photo) {
            return photo.album._id.toString() === req.params.id;
        });
        res.render('album_detail',{ title: 'Photo Album', album: findAlbum, photos: albumPhotos });
    } catch (err) {
        return next(err);
    }
};

// Display Album Create Form - GET
exports.album_create_get = (req, res, next) => {
        res.render('album_form', { title: 'Create New Album' });
};

// Handle Album Create - POST
exports.album_create_post = [
    // Validate Fields
    body('event_name').trim().escape(),
    body('date_submitted').trim().escape(),
    // Process
    (req, res, next) => {
        const errors = validationResult(req);
        // create new album obj
        const album = new Album({
            event_name: req.body.event_name,
            date_submitted: req.body.date_submitted,
        });
        if(!errors.isEmpty()) {
            // There are errors
            res.render('album_form', { title: 'Create Album', album: album, errors: errors.array() });
            return;
        } else {
            Album.findOne({ 'event_name': req.body.event_name })
                .exec(function(err, found_album) {
                    if (err) { return next(err); }
                    if (found_album) {
                        res.redirect(found_album.url);
                    }
                    else {
                        album.save(function(err) {
                            if (err) { return next(err); }
                            res.redirect(album.url);
                        });
                    }
                });
        }
    }
];

// Display Album Delete - GET
exports.album_delete_get = (req, res, next) => {
    Album.findById(req.params.id)
        .exec(function(err, album) {
            if (err) { return next(err); }
            if (album === null) {
                res.redirect('/photogallery');
            }
            // Successful
            res.render('album_delete', { title: 'Delete Album', album: album });
        });
};

// Handle Album Delete - POST
exports.album_delete_post = (req, res, next) => {
    Album.findByIdAndDelete(req.body.id, function deleteAlbum(err) {
        if (err) { return next(err); }
        // Successful
        res.redirect('/photogallery');
    });
};