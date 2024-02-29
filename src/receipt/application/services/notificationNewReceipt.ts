import {Receipt} from '../../domain/receipt';
import { NewReceiptNotification } from '../../infrastructure/services/Rabbit/newReceiptNotification';

export class NotificationNewReceipt{
    constructor(private notification: NewReceiptNotification) {}
    async run (receipt: Receipt): Promise<void> {
        await this.notification.sendNotification(receipt);
    }
}