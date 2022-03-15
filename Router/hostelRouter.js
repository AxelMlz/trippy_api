const express = require("express");
const Joi = require("joi");
const router = express.Router();

const hostel = ("../data/hostel.json")

const schemaHostel = Joi.object({
    name : Joi.string().min(5).required,
    adress : Joi.string().min(5).required,
    city : Joi.string().min(5).required,
    country : Joi.string().min(5).required,
    stars : Joi.number().min(1).max(5).required(),
    hasSap : Joi.boolean().required(),
    hasPool : Joi.boolean().required(),
    priceCategory : Joi.number().min(1).max(3).required(),
})

router.get("/", (_req, res) => {
    res.json(hostel)
});
router.get("/:id", (_req, res) => {
    res.json(hostel)
});

module.exports = router;
