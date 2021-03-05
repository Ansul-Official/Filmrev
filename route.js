const express = require('express');

const getFilm = require ('./controll/film/getFilm');
const getOneFilm = require ('./controll/film/getOneFilm');
const addFilm = require ('./controll/film/setFilm');
const delFilm = require ('./controll/film/deleteFilm');
const upFilm = require ('./controll/film/updateFilm');
// inisial route
const route = express.Router();
// setMethod, Method
route.get('/film', getFilm);
route.get('/film/:id', getOneFilm);
route.post('/film', addFilm);
route.put('/film/:id', upFilm);
route.delete('/film/:id', delFilm);


module.exports = route;