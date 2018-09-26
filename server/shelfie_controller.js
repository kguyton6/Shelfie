




module.exports = {
    get_all: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all(req.params.id)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Get all Kim' })
                console.log(err)
            })
    },

    get_shelf_bins: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_shelf_bins(req.params.id, req.params.bin)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Get all Kim' })
                console.log(err)
            })
    },

    update_table: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, image_url } = req.body

        dbInstance.update_table(req.params.id, req.params.bin, name, price, image_url)
            .then((data) => res.status(200).send(data))
            .catch(err => {
                res.status(500).send({ errorMessage: 'update not work Kim' })
                console.log(err)
            })
    },



        delete: (req, res, next ) => {
            const dbInstance = req.app.get('db')
            const { name, price, image_url } = req.body
            
            dbInstance.delete(req.params.id, req.params.bin, name, price, image_url)
            .then(() => res.status(200).send(alert('deleted')))
        }



}
