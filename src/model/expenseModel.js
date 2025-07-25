// src/model/expenseModel.js

const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema(
    {
        description:{
            type: String,
            required: [true, 'Please add a description']
        },
        amount:{ // fixed typo
            type: Number,
            required: [true, 'Please add an amount']
        },
        
      
    },
    {
        timestamps: true, // fixed typo
    }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;  // this is the collection name that you'll find in the Database "Expense"