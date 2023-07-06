const { Router } = require('express');
const createServiceRouter = require('./createService.route');
const createTypeServiceRouter = require('./createTypeService.route');
const getAllTypeServiceRouter = require('./getAllTypeService.route');
const getAllServiceRouter = require('./getAllServices.route');
const getServiceById = require('./getServiceById.route');
const getServiceByName = require('./getServiceByName');
const getLoginHandlerRouter = require('./getLoginHandler.route');
const authenticateHandlerRouter = require('./authenticateHandler.route');
const authCallbackHandlerRouter = require('./authCallBack.route');
const loginSuccessHandlerRouter = require('./authCallBackSuccess.route');
const loginFailureHandlerRouter = require('./authCallBackFailure.route');
const logoutHandlerRouter = require('./getLogoutHandler.route');
require('../middleware/passport');
const singUpRouter = require('./singUp.router');
const singInRouter = require('./singIn.router');
const editUserRouter = require('./editUser.route');
const editServiceRouter = require('./editService.route');
const createPreferenceRouter = require('./createPreference.route');
const feedbackRouter = require('./feedback.route');
const getServicesByUserRouter = require('./getServicesByUser.route');
const getUserByIdRouter = require('./getUserById.route')
const router = Router();

router.use('/service', createServiceRouter);
router.use('/typeService', createTypeServiceRouter);
router.use('/allTypeService', getAllTypeServiceRouter);
router.use('/allService', getAllServiceRouter);
router.use('/serviceById', getServiceById);
router.use('/nameService', getServiceByName);
router.use('/singUp', singUpRouter);
router.use('/singIn', singInRouter);
router.use('/editUser', editUserRouter);
router.use('/editService', editServiceRouter);
router.use('/getUserById', getUserByIdRouter);
router.use('/getServiceByUser', getServicesByUserRouter);
//!REFERIDO A LOGIN GOOGLE
router.use("/loginGoogle", getLoginHandlerRouter);
router.use("/auth", authenticateHandlerRouter);
router.use("/auth/callback", authCallbackHandlerRouter);
router.use("/auth/callback/success", loginSuccessHandlerRouter);
router.use("/auth/callback/failure", loginFailureHandlerRouter);
router.use("/logout", logoutHandlerRouter)
//!REFERIDO A MERCADOPAGO
router.use('/orderMP', createPreferenceRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;