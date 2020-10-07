const Photo = require('../models/photos');
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
exports.photo_create_get = (req, res, next) => {
    
    res.render('photo_upload', { title: 'Add New Photo' })
};

// Handle Photo Create - POST
exports.photo_create_post = [
    upload.single('photo'),
    (req, res, next) => {
        console.log(req.file);
        const photo = new Photo({
            img: { data: fs.readFileSync(req.file.path), contentType: req.file.mimetype }
        });
        photo.save(function(err) {
            if (err) { return next(err); }
            res.redirect(photo.url);
        });
    }
];

// Display Photo Delete - GET
exports.photo_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: photo delete GET');
};

// Handle Photo Delete - POST
exports.photo_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: photo delete POST');
};