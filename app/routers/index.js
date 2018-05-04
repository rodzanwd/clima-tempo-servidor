const express = require('express');

const controller = require('../controllers/index');

module.exports = (app) => {
    app.get('/locales', controller.locales);
    app.get('/weather', controller.weather);
}