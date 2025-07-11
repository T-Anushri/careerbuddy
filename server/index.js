const express = require('express');
const app = express();
const chatModelRoute = require('./routes/chatbot');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatModelRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
