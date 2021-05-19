const db = require('../models/index');

const productosController = {
    //createPedidos actions
    createProductos: async (req, res) => {
        const productos = db.productos.build({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion
        })
        if (!productos.validate()) {
            res.status(400).json();
        }
        try {
            await productos.save()
            res.status(201).json();
        } catch (error) {
            res.status(500).json({
                isSucces: false,
                error: 'No se pudo crear el nuevo producto'

            })

        }

    },

    //getPedidos actions
    getProductos: async (req, res) => {
        let productos = await db.productos.findAll()
        if (productos.length > 0) {
            res.json(productos);
        } else {
            res.status(204).json()
        }
    },




    //get products by id actions
    getById: async (req, res) => {
        let producto = await db.productos.findOne({
            where: {
                id: req.params.id

            }
        })
        if (producto !== null) {
            res.json(producto)
        } else {
            res.status(404).json()
        }

    },

    //update Actions
    updateProductos: async (req, res) => {
        let producto = await db.productos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (producto == null) {
            res.json(404).json()
        }
        await producto.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion
        })
        res.status(204).json()


    },

    //delete actions
    deleteProductos: async (req, res) => {
        let producto = await db.productos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (producto == null) {
            res.json(404).json()
        }
        await producto.destroy({})
        res.status(204).json()
    }

}

module.exports = productosController;