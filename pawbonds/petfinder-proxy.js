// Simple Node.js Express proxy for Petfinder API (ES module syntax)
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config(); 
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.VITE_PETFINDER_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_PETFINDER_CLIENT_SECRET;

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  // If token is cached and not expired, return it
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  });
  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // Subtract 60s for safety
  return cachedToken;
}

app.get("/api/pets", async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await fetch("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Petfinder proxy running on http://localhost:${PORT}`);
});
