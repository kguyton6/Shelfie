
module.exports = {
    get_all: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errorMessage: 'Get all Kim'})
            console.log(err)
        })
    },

    get_shelf_bins: (req, res ) => {
        dbInstance.get_shelf_bins()
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errorMessage: 'Get shelf.bin Kim'})
            console.log(err)
        })
    }

    // post_create: (req, res, next) => {
    //     const dbInstance = req.app.get('db')
    //     const { shelf, bin, name, price, image_url } = req.body

    //     dbInstance.post_create([shelf, bin, name, price, image_url])
    //         .then(() => res.sendStatus(200)).send('cool')
    //         .catch(err => { res.status(500)
    //         .send({ errorMessage: 'post not working Kim'})
    //             console.log(err)
    //         })
    // },
    

    // update_table: (req, res, next) => {
    //     const dbInstance = req.app.get('db')
        

    //     dbInstance.update_table(req.body.params.shelf.bin)
    //     .then((res) => res.status(200).send(req.body.shelf.bin))
    //     .catch(err => {
    //         res.status(500).send({errorMessage: 'update not work Kim'})
    //         console.log(err)
    //     })
    // },
    // put_shelfs: (req, res ) => {
    //     dbInstance.put_shelfs(req.body.params.shelf.bin)
    //     .then(product => res.status(200).send(req.body.shelf.bin))
    //     .catch(err => {res.status(500).send({errorMessage: 'put not working Kim'})
    // console.log(err)})
    // }
}
