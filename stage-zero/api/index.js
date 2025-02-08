import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/api", (req, res) => {
  res.status(200).json({
    email: "joyibe5@gmail.com", 
    current_datetime: new Date().toISOString(), 
    github_url: "https://github.com/DaFlusher/HNG-Backend-stage-zero-public-api" 
  });
});

// Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
export default app;