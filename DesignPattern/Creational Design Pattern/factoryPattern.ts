// Notification interface
interface Notification {
    send(message: string): void;
}
 
// SMS notification class
class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`Sending SMS notification: ${message}`);
    }
}
 
// Email notification class
class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sending Email notification: ${message}`);
    }
}
 
// Push notification class
class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Sending Push notification: ${message}`);
    }
}
 
// Notification factory
class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type) {
            case 'SMS':
                return new SMSNotification();          
            case 'Email':
                return new EmailNotification();
            case 'Push':
                return new PushNotification();
            default:
                throw new Error('Invalid notification type.');
        }
    }
}
 
// Client code
const smsNotification = NotificationFactory.createNotification('SMS');
smsNotification.send('Hello from SMS!');
 
const emailNotification = NotificationFactory.createNotification('Email');
emailNotification.send('Hello from Email!');
 
const pushNotification = NotificationFactory.createNotification('Push');
pushNotification.send('Hello from Push Notification!');