import express from 'express';
import cors from 'cors';
const app = express();

// Configure CORS options
const corsOptions = {
  origin: ['http://www.geoplugin.net', 'http://localhost:5173'],
  optionsSuccessStatus: 200 // For legacy browser support
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Example route
app.get('/data', (req, res) => {
  res.json({ message: 'CORS-enabled for multiple origins' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
