const express = require('express');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const ProfileController = require('../controllers/ProfileController');
const SessionController = require('../controllers/SessionController');


const routes = express.Router();

// Incident routes
routes.post('/create_incident', IncidentController.create);
routes.get('/list_incident', IncidentController.index);
routes.delete('/delete_incident/:id', IncidentController.delete);

// Unique profile route
routes.get('/profile', ProfileController.index);

// Unique session route
routes.post('/session', SessionController.create);

// Ong routes
routes.get('/list_ong', OngController.index);
routes.post('/create_ong', OngController.create);

module.exports = routes;