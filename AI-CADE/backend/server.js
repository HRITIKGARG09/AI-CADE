//##############2)Server Receives the Request


const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/test-code', (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  const analysisResults = mockAnalyzeCode(code, language);
  res.status(200).json(analysisResults);
});

const mockAnalyzeCode = (code, language) => {
  const testCases = [
    'Test case 1: Check if function returns expected output for input X.',
    'Test case 2: Verify edge case handling for input Y.'
  ];
  const suggestions = 'Consider optimizing the loop to reduce time complexity.';
  return { testCases, suggestions };
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





//##############3)MockAnalyseCodeFunction

const mockAnalyzeCode = (code, language) => {
    const testCases = [
      'Test case 1: Check if function returns expected output for input X.',
      'Test case 2: Verify edge case handling for input Y.'
    ];
    const suggestions = 'Consider optimizing the loop to reduce time complexity.';
    return { testCases, suggestions };
  };
  

//##############5)Backend Error Handling


  app.post('/api/test-code', (req, res) => {
    const { code, language } = req.body;
  
    if (!code || !language) {
      return res.status(400).json({ error: 'Code and language are required.' });
    }
  
    try {
      const analysisResults = mockAnalyzeCode(code, language);
      res.status(200).json(analysisResults);
    } catch (error) {
      console.error('Error analyzing code:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });
  