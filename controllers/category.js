const Category = require('../models/category');

exports.createCategory = (req, res, next) => {
    const categoryObject = req.body;
    delete categoryObject._id;

    const category = new Category(
        categoryObject
    );

    category.save()
        .then(() => res.status(201).json({ message: 'Category saved' }))
        .catch((error) => res.status(400).json({ message: error }))
    ;
}

exports.readCategories = (req, res, next) => {
    Category.find()
        .then(categories => res.status(200).json(categories))
        .catch(error => res.status(400).json({ error }))
    ;
}
