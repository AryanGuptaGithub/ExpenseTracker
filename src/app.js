const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const expenseRoutes = require("./routes/ExpenseRoutes.js"); // fixed path

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://expense-tracker-frontend-lac.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port http://0.0.0.0:${PORT} `);
});
