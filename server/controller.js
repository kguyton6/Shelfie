module.exports = {
    create: (req, res, next) => {
     const dbInstance = req.app.get('db')
    const {name, price, imageurl } = req.body

    dbInstance.create_products([name, price, imageurl])
    .then((products) => {res.status(200).send(products)
    }).catch(err => console.log(err, "Ooops! Failed"))
},

    read: (req,res,next) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.read_products()
    .then((products) => {res.status(200).send(products)
    }).catch(err => console.log(err, "Sorry, No Workie"))
    },

    addStuff: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.add_products() 
    .then(() => { res.status(200).send()
    }).catch(err => 
    console.log(err))
    
  }
}