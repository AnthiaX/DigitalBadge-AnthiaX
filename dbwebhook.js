const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/webhook', (req, res) => {
  const {
    id,
    member,
    email,
    product,
    badgeawardeddate,
    badgeexpirydate
  } = req.body;

  // Validate required fields
  if (!id || !member || !email || !product || !badgeawardeddate || !badgeexpirydate) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields',
      webhookId: null,
      storedIn: null,
      badgeurl: null,
      badgeiframe: null
    });
  }

  // Simulate processing and response generation
  const responsePayload = {
    success: true,
    message: 'Badge processed successfully',
    webhookId: id,
    storedIn: 'flybot-storage',
    badgeurl: `https://yourdomain.com/badges/${id}`,
    badgeiframe: `<iframe src="https://yourdomain.com/badges/${id}" width="400" height="200"></iframe>`
  };

  res.status(200).json(responsePayload);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webhook listening on port ${PORT}`));
