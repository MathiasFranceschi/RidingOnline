const express = require('express');
const mainController = require('./controllers/mainController');
const baladesController = require('./controllers/baladesController');
const { catchErrors } = require('../middlewares/errorHandlers');
const router = express.Router();


router.get('/', catchErrors(mainController.index));

router.get('/balades', catchErrors(baladesController.index));
router.get('/balades/:slug', catchErrors(baladesController.oneBalad))

module.exports = router;
