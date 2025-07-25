// src/controllers/ExpenseController.js
const Expense = require("../model/expenseModel"); // fixed path

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses); // fixed typo
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addExpense = async (req, res) => {
  const { description, amount, } = req.body; // fixed typo

  try {
    const newExpense = new Expense({
      description,
      amount,
     
     
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    console.log("❌ Expense Removed ");
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExpenses,
  addExpense,
  deleteExpense,
};
