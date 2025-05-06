const dotenv = require('dotenv');
const connectDB = require('../config/db');
dotenv.config();

const app = require('./app');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on http://192.168.1.180:${PORT}`);
});
