import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'node-service',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/node/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js service!',
    version: '1.0.0'
  });
});

app.get('/api/node/data', (req, res) => {
  res.json({ 
    data: [
      { id: 1, name: 'Item 1', type: 'node' },
      { id: 2, name: 'Item 2', type: 'node' },
      { id: 3, name: 'Item 3', type: 'node' }
    ]
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Node.js service running on port ${PORT}`);
});

