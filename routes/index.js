var express = require('express');
var router = express.Router();

// Controller Modules
const app_controller = require('../controllers/appController');
const event_controller = require('../controllers/eventController');
const photo_controller = require('../controllers/photoController');

// GET Home Page
router.get('/', app_controller.index);

// EVENT ROUTES //

// Get create an Event
router.get('/calender/create', event_controller.event_create_get);

// POST create an Event
router.post('/calender/create', event_controller.event_create_post);

// Get delete Event
router.get('/calender/:id/delete', event_controller.event_delete_get);

// POST delete Event
router.post('/calender/:id/delete', event_controller.event_delete_post);

// Get update Event
router.get('/calender/:id/update', event_controller.event_update_get);

// POST update Event
router.post('/calender/:id/update', event_controller.event_update_post);

// GET Event detail
router.get('/calender/:id', event_controller.event_detail);

// Get List of Events - Calender
router.get('/calender', event_controller.calender);

// PHOTO GALLERY ROUTES //

// Get create photo
router.get('/photos/create', photo_controller.photos_create_get);

// POST create photo
router.post('/photos/create', photo_controller.photos_create_post);

// Get delete photo
router.get('/photos/:id/delete', photo_controller.photos_delete_get);

// POST delete photo
router.post('/photos/:id/delete', photo_controller.photos_delete_post);

// Get update Photo
router.get('/photos/:id/update', photo_controller.photos_update_get);

// POST update Photo
router.post('/photos/:id/update', photo_controller.photos_update_post);

// Get Photo detail
router.get('/photos/:id', photo_controller.photos_detail);

// Get list of photos
router.get('/photogallery', photo_controller.photo_gallery);

// OTHER ROUTES //

// About Page
router.get('/about', app_controller.about);

// Club News
router.get('/club-news', app_controller.clubNews);

// Contact
router.get('/contact', app_controller.contact);


module.exports = router;
