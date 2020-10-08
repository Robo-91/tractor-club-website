const Photo = require('../models/photos');
const Album = require('../models/album');
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

// Display detail page of specific Photo
exports.photo_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: photo detail: ${req.params.id}`);
};

// Display Photo Create Form - GET
exports.photo_create_get = async (req, res, next) => {
    try {
        const albums = await Album.find();
        res.render('photo_upload', { title: 'Add New Photo', albums: albums });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
    
};

// Handle Photo Create - POST
exports.photo_create_post = [
    upload.single('photo'),
    async (req, res, next) => {
        const photo = new Photo({
            album: req.body.album,
            img: { data: fs.readFileSync(req.file.path), contentType: req.file.mimetype }
        });
        try {
            const newPhoto = await photo.save();
            res.redirect(newPhoto.url);
        } catch (err) {
            return next(err);
        }
    }
];

// Display Photo Delete - GET
exports.photo_delete_get = (req, res, next) => {
    Photo.findById(req.params.id)
        .exec(function(err, photo) {
            if (err) { return next(err); }
            if (photo === null) {
                res.redirect('/photogallery');
            }
            res.render('photo_delete', { title: 'Delete Photo', photo: photo })
        })
};

// Handle Photo Delete - POST
exports.photo_delete_post = (req, res, next) => {
    Photo.findByIdAndRemove(req.body.id, function deletePhoto(err) {
        if (err) { return next(err); }
        res.redirect('/photogallery');
    })
};