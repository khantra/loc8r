var express = require('express');
var router = express.Router();

//Require controller files
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

//Define routes and map them to controller functions
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
