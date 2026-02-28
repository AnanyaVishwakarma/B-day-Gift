import 'dotenv/config'; // MUST be at the top to read your password
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. SERVE STATIC FILES FROM BUILD (This is where the real React code lives)
app.use(express.static(path.join(_dirname, "build")));

// 2. API ROUTE
app.post("/verify-password", (req, res) => {
  const { password } = req.body;
  if (password === SECRET_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// 3. FALLBACK (Keep this at the very bottom)
app.use((req, res, next) => {
  if (req.url.startsWith('/verify-password')) {
    return next();
  }
  res.sendFile(path.join(_dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});