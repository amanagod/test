const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger); // log method and path

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
