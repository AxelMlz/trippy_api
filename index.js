const express = require('express');
const app = express();
const port = 8000;
const Joi = require("joi");

// MMiddleware
app.use(express.json());

//Router

const hostelRouter = require("./Router/hostelRouter.js")
const restaurantRouter = require("./Router/restaurantRouter.js")

app.use('/hostel', hostelRouter );
app.use('/restaurant', restaurantRouter);



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
const schemaRestaurant = Joi.object({
    name : Joi.string().min(5).required,
    adress : Joi.string().min(5).required,
    city : Joi.string().min(5).required,
    country : Joi.string().min(5).required,
    cuisine : Joi.string().required,
    stars : Joi.number().min(1).max(5).required(),
    priceCategory : Joi.number().min(1).max(3).required(),
})

// GET - API name
app.get('/',(_req, res) =>{
    res.send("Trippy API")
});

// Error
app.get("*", (_req, res) => {
    res.status(404).send("error 404");
});

// LocalHost 
app.listen(port, () => {
    console.log (`Server started on port:` + port)
});
