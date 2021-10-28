const express = require('express');
const { showSavings } = require('../controllers/saving.controller');
const router = express.Router();

const saving = require('../controllers/saving.controller');

router.get('/',saving.calculateSavings);
router.get('/',saving.showSavings);


module.exports = router;