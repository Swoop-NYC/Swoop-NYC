const Item = require('../models/itemModel.js');

const itemController = {} 

itemController.createItem = (req, res, next) => {
    console.log('in the itemController, and here are the contents of the request body: ', req.body)
        // const { title, image, description, location, dropTime } = req.body;

        // const array = ['title', 'image', 'description', 'location', 'dropTime'];

        // res.locals.newItem = {};

        // for(let i = 0; i < array.length; i++) {
        //     if(!req.body[array[i]]) {
        //         return next({log: 'there is an error it itemController createItem', status: 404, message: {err: 'you are missing information for your created item'}})
        //     } else {
        //         res.locals.newItem[array[i]] = req.body[array[i]]
        //     }
        // }
        
        Item.create(req.body)
        .then((data) => {
            res.locals.newItem = data;
            next();
        })
        .catch((err) => {
            return next({log: 'there is an error it itemController createItem', status: 404, message: {err: err.message}})
        })

    };

module.exports = itemController;