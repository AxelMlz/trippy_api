const express = require("express");
const Joi = require("joi");
const router = express.Router();

const hostel = require("../data/hostel.json")

function hostelDescriptionValidation(req,res,next){

const schema = Joi.object({
    name : Joi.string().min(5).max(25).required,
    adress : Joi.string().min(5).max(100).required,
    city : Joi.string().min(5).max(20).required,
    country : Joi.string().min(5).max(35).required,
    stars : Joi.number().min(1).max(5).required(),
    priceCategory : Joi.number().min(1).max(3).required(),
    hasSap : Joi.boolean().required(),
    hasPool : Joi.boolean().required(),
})

const hostelvalidation = schema.validate(req.body);

if (hostelvalidation.error) {
    return res.send('error')

}
next();
}


router.get("/", (_req, res) => {
    res.json(hostel)
});
router.get("/:id", (_req, res) => {
    res.json(hostel)
});
router.post("/",hostelDescriptionValidation, (req, res) => {
    // const inputHostel = req.body
      hostel.push(req.body);
      res.send(hostel)
});

// {
//         id: hostel.length + 1,
//         name: req.body.name,
//         address: req.body.address,
//         city: req.body.city,
//         country: req.body.country,
//         stars: req.body.stars,
//         priceCategory: req.body.priceCategory,
//         hasSpa: req.body.hasSpa,
//         hasPool: req.body.hasPool,
//       };
module.exports = router;
