var Order = require('../models/order');

exports.order_id = function(req, res) {
    res.send('NOT IMPLEMENTED: order_id');
};

exports.amount = function(req, res) {
    res.send('NOT IMPLEMENTED:  amount');
};

exports.order_date = function(req, res) {
    res.send('NOT IMPLEMENTED:  order_date');
};

exports.product_product_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  product_product_id');
};

exports.shipping_address_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  shipping_address_id');
};

exports.user_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  user_id');
};

import express from 'express'
            const router=express.Router()
            import { findAllUsers } from '../../controllers/user.js'

            router.get('/all',findAllUsers)

            export default router