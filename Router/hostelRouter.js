const express = require("express");
const Joi = require("joi");
const router = express.Router();

const hostel = require("../data/hostel.json")


const schema = Joi.object({

    name : Joi.string().min(5).max(25).required,
    adress : Joi.string().min(5).max(100).required,
    city : Joi.string().min(5).max(20).required,
    country : Joi.string().min(5).max(35).required,
    stars : Joi.number().min(1).max(5).required(),
    hasSap : Joi.boolean().required(),
    hasPool : Joi.boolean().required(),
    priceCategory : Joi.number().min(1).max(3).required(),
})

function hostelDescriptionValidation(req,res,next){
const hostelvalidation = schema.validate(req.body);
if (hostelvalidation.error) {
    return res.send('error')
}
next();
}
function idAttribution (req, res, next){
    const id = parseInt(req.params.id)
    // if()
}

router.get("/", (_req, res) => {
    res.json(hostel)
});
router.get("/:id", (_req, res) => {
    //    console.log(`${idTransit} done`)
    //    console.log(`${_req.params.id} done`)
    let idTransit = _req.params.id;
    let id = Number(idTransit)-1
    //    console.log(`${id} done`)

    res.json(hostel[id])
});
router.get("/:id", (_req, res) => {
    res.json(hostel)
});
router.post("/hostel/:id",hostelDescriptionValidation, (req, res) => {
    // const inputHostel = req.body
    const newHostel =
    {
            id: hostel.length + 1,
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            stars: req.body.stars,
            priceCategory: req.body.priceCategory,
            hasSpa: req.body.hasSpa,
            hasPool: req.body.hasPool,
          };
      hostel.push(newHostel);
      res.send(hostel)

});
router.patch('/hostel/:id', (req, res) => {
    let idTransit = req.params.id;
    let id = Number(idTransit)-1
    
    const hostel = req.schema
    console.log(hostel);
    hostel[id].name = req.body.name

    res.json({
        message:"name updated",
        hostel,
    });
})

router.delete('/hostel/:id', (req, res) => {
    let idTransit = req.params.id;
    let id = Number(idTransit)-1
    hostel.splice(id, 1)
    res.send(hostel)
})
module.exports = router;
