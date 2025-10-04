const express = require('express');
const cors = require('cors');
const dashboardRoutes = require('./routes/dashboard'); 
const patientProfileRoutes = require('./routes/patientProfile');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json()); 
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/profile', patientProfileRoutes);
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
