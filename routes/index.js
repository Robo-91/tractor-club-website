var express = require('express');
var router = express.Router();

// Controller Modules
const app_controller = require('../controllers/appController');
const event_controller = require('../controllers/eventController');
const album_controller = require('../controllers/albumController');
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

// Get create Album
router.get('/album/create', album_controller.album_create_get);

// POST create Album
router.post('/album/create', album_controller.album_create_post);

// Get delete Album
router.get('/album/:id/delete', album_controller.album_delete_get);

// POST delete Album
router.post('/album/:id/delete', album_controller.album_delete_post);

// Get Album detail
router.get('/album/:id', album_controller.album_detail);

// Get list of Album
router.get('/photogallery', album_controller.photo_gallery);

// PHOTO ROUTES

// Get create Photo
router.get('/photo/create', photo_controller.photo_create_get);

// POST create Photo
router.post('/photo/create', photo_controller.photo_create_post);

// Get Delete Photo
router.get('/photo/:id/delete', photo_controller.photo_delete_get);

// POST Delete Photo
router.post('/photo/:id/delete', photo_controller.photo_delete_post);

// Get Photo Detail
router.get('/photo/:id', photo_controller.photo_detail);

// Admin Routes

// GET Admin form
router.get('/admin', app_controller.adminSignUp);

// POST admin form
router.post('/admin', app_controller.adminSignUp_post);

// OTHER ROUTES //

// About Page
router.get('/about', app_controller.about);

// Club News
router.get('/clubnews', app_controller.clubNews);

// Contact
router.get('/contact', app_controller.contact);


module.exports = router;
