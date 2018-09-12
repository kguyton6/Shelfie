inventory = []
id = 0



module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, imageUrl } = req.body

        dbInstance.add_inventory([name, price, imageUrl])
            .then(() => res.sendStatus(200))
            .catch(err => { res.status(500)
            .send({ errorMessage: "Ooops, Not Today"})
                console.log(err)
            })
    },
    
    read: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_inventory()
        .then(inventory = res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: 'Not Working'})
            console.log(err)
        })
    }
}