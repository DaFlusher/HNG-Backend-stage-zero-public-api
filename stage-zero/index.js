import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    email: "joyibe5@gmail.com", // Replace with your HNG12 Slack email
    current_datetime: new Date().toISOString(), // ISO 8601 UTC timestamp
    github_url: "https://github.com/DaFlusher" // Replace with your repo URL
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
