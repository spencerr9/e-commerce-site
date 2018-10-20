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
        const {product} = req.params;
        console.log(req.params.product)

        dbInstance.add_cartItem(product)
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    }, 

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log(req.params.id)

        dbInstance.delete_cartItem(id)
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log(req.params.id)

        dbInstance.getOne_cartItem(id)
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },

    addQty: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log(req.params.id)

        dbInstance.add_qty(id)
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },

    subQty: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log(req.params.id)

        dbInstance.subtract_qty(id)
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    },

    checkOut: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.check_out()
            .then( (items) => res.status(200).send(items))
            .catch( err => {
                res.status(500).send({errorMessage: "--- Something went wrong ---"})
                console.log(err)
            })
    }
};