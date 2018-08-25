module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // const {params} = req;

        dbInstance.get_cartItems()
            .then( items => res.status(200).send(items) )
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },
    
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id, product, quantity} = req.body;

        dbInstance.addCartItem([id, product, quantity])
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
            })
    }
};