

module.exports = {
    read_inventory: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_inventory()
        .then(Products => res.status(200).send(Products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Not Working'})
            console.log(err)
        })
    },


    get_one: (req, res, next) => {
        const dbInstance = req.app.get('db')
        

        dbInstance.get_one(`${req.query.shelf}`)
        .then(() => res.status(200).send())
        .catch(err => {
            res.status(500).send({errorMessage: 'not working'})
            console.log(err)
        })
    },

    add_inventory: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, image_url } = req.body

        dbInstance.add_inventory([name, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => { res.status(500)
            .send({ errorMessage: "Ooops, Not Today"})
                console.log(err)
            })
    }
    
}