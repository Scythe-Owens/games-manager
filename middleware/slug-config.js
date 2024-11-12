const slugify = require("slugify");

const slugifyName = (req, res, next) => {
    let data = req.body;

    if (req.file) {
        data = JSON.parse(data.data);
    }

    req.body.slug = slugify(data.name, {
        lower: true
    })

    next();
}

module.exports = slugifyName;
