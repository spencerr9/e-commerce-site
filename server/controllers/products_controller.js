module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id, product, price, category, image_src} = req.body

        dbInstance.add_product([id, product, price, category, image_src])
            .then( (products) => res.status(200).send(products) )
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // const {params} = req;

        dbInstance.get_products()
            .then( products => res.status(200).send(products) )
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    }
};