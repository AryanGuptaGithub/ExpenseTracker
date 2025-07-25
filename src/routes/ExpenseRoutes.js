// src/routes/ExpenseRoutes.js

const express = require('express');
const router = express.Router();

const {
    getExpenses,
    addExpense, // fixed typo
    deleteExpense,
} = require('../controllers/ExpenseController'); // fixed path

router.route('/').get(getExpenses).post(addExpense); // GET & POST Routes 

router.route('/:id').delete(deleteExpense);



module.exports = router;