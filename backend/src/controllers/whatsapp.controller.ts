import { Request, Response } from 'express';
import { WhatsAppService } from '../services/whatsapp.service';

export class WhatsAppController {
    private whatsappService: WhatsAppService;

    constructor() {
        this.whatsappService = new WhatsAppService();
    }

    public async onboardUser(req: Request, res: Response): Promise<void> {
        try {
            const { phoneNumberId, wabaId } = req.body;
            const result = await this.whatsappService.connectWABA(phoneNumberId, wabaId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createMessageTemplate(req: Request, res: Response): Promise<void> {
        try {
            const { templateData } = req.body;
            const result = await this.whatsappService.createTemplate(templateData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async handleWebhook(req: Request, res: Response): Promise<void> {
        try {
            const webhookData = req.body;
            await this.whatsappService.processWebhook(webhookData);
            res.status(200).send('Webhook received');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}