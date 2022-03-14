const express = require("express");
const Joi = require("joi");
const router = express.Router();

const restaurant = require("../data/restaurant.json")

const schemaRestaurant = Joi.object({
    name : Joi.string().min(3).max(20).required,
    adress : Joi.string().min(5).max(60).required,
    city : Joi.string().min(5).required,
    country : Joi.string().min(5).required,
    cuisine : Joi.string().required,
    stars : Joi.number().min(1).max(5).required(),
    priceCategory : Joi.number().min(1).max(3).required(),
})
