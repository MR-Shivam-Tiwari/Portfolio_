const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/Data');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Add this line to enable CORS

mongoose.connect('mongodb+srv://shivamt2023:ft123shivam123@cluster0.nasml5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
