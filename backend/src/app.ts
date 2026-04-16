import express from 'express';
import bodyParser from 'body-parser';
import { WhatsAppController } from './controllers/whatsapp.controller';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const whatsappController = new WhatsAppController();
app.post('/api/onboard', whatsappController.onboardUser);
app.post('/api/templates', whatsappController.createTemplate);
app.post('/api/webhook', whatsappController.handleWebhook);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});