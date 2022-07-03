const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Mongo Connection Error");
        console.log(err);
    });

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(err => {
//         console.log(err);
//     })

Product.insertMany([
    { name: 'Fairy Eggplant', price: 1.00, category: "vegetable" },
    { name: 'Organic Goddess Melon', price: 4.99, category: "fruit" },
    { name: 'Watermelon', price: 3.99, category: "fruit" },
    { name: 'Celery', price: 1.50, category: "vegetable" },
    { name: 'Choco Milk', price: 1.49, category: "dairy" },
])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })