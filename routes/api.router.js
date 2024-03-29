const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.controller');
const productosController = require('../controllers/productos.controller');
const usuariosController = require('../controllers/usuarios.controller');
const userValidation = require('../validations/users.validations');


//User routers
router.post('/usuarios', userValidation.isAuthorized, userValidation.isAdmin, usuariosController.createUsuarios); //Crea usuario
router.get('/usuarios/login', usuariosController.authenticate); //Login


//Products routers
router.post('/productos', userValidation.isAuthorized, userValidation.isAdmin, productosController.createProductos);
router.get('/productos', userValidation.isAuthorized, productosController.getProductos);
router.get('/productos/:id', userValidation.isAuthorized, productosController.getById);
router.put('/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, productosController.updateProductos);
router.delete('/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, productosController.deleteProductos);


//Pedidos routers
router.post('/pedidos', userValidation.isAuthorized, pedidosController.createPedidos);
router.get('/pedidos', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.getPedidos);
router.get('/pedidos/:id', userValidation.isAuthorized, pedidosController.getPedidosById);
router.put('/pedidos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.updatePedidos);
router.delete('/pedidos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.deletePedidos);


module.exports = router
