import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './src/backend/server-app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// Serve static assets from built Vite directory
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect non-API requests to index.html for React SPA
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    next();
    return;
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production Indian Shoes E-Commerce Server online on port ${PORT}`);
});
