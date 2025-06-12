// routes/chatModel.js
const express = require('express');
const router = express.Router();
const { InferenceClient } = require('@huggingface/inference');
require('dotenv').config();

const client = new InferenceClient(process.env.HF_TOKEN);

function extractReply(input) {
  // Remove the <think>...</think> block using regex
  const cleaned = input.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  return cleaned;
}

// POST /api/chatmodel
router.post('/', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    const response = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-R1-0528-Qwen3-8B",
      messages: [{ role: "user", content: userMessage }],
    });
    const cleanedReply = extractReply(response.choices[0].message.content);
    res.json({ reply: cleanedReply });
  } catch (error) {
    console.error("Inference API error:", error);
    res.status(500).json({ error: 'Failed to fetch response from model' });
  }
});

module.exports = router;
