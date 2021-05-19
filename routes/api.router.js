const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.controller');
const productosController = require('../controllers/productos.controller');
const usuariosController = require('../controllers/usuarios.controller');
const userValidation = require('../validations/users.validations');


//User routers
router.post('/usuarios/login', usuariosController.authenticate); //Login

router.post('/usuarios', userValidation.isAuthorized, userValidation.isAdmin, usuariosController.createUsuarios); //Crear un nuevo usuario

//router.get('usuarios/:id', userValidation.isAuthorized, usuariosController.getById)




//Products routers
router.post('/productos', userValidation.isAuthorized, userValidation.isAdmin, productosController.createProductos);

router.get('/productos', userValidation.isAuthorized, productosController.getProductos);

router.get('/productos/:id', userValidation.isAuthorized, productosController.getById);

router.put('/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, productosController.updateProductos);

router.delete('/productos/:id', userValidation.isAuthorized, userValidation.isAuthorized, productosController.deleteProductos);



//Pedidos routers
router.post('/pedidos', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.createPedidos);

router.get('/pedidos', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.getPedidos);

router.get('/pedidos/:id/productos/:id', userValidation.isAuthorized, pedidosController.getPedidosById);

router.put('/pedidos/:id/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.updatePedidos);

router.delete('/pedidos:id/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.deletePedidos);


module.exports = router