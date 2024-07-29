const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Helper function to get the absolute path of summariser.py
const getScriptPath = () => {
  return path.resolve(__dirname, 'summariser.py');
};

app.post('/summarise', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send({ error: 'No text provided for summarization' });
  }

  const scriptPath = getScriptPath();
  console.log(`Running script at: ${scriptPath}`);

  // Call Python script for summarization
  exec(`python "${scriptPath}" "${text.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${stderr}`);
      return res.status(500).send({ error: stderr });
    }
    res.send({ summary: stdout.trim() });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export app for testing
