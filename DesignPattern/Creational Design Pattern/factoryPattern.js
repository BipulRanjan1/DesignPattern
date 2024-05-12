// SMS notification class
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Sending SMS notification: ".concat(message));
    };
    return SMSNotification;
}());
// Email notification class
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Sending Email notification: ".concat(message));
    };
    return EmailNotification;
}());
// Push notification class
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.send = function (message) {
        console.log("Sending Push notification: ".concat(message));
    };
    return PushNotification;
}());
// Notification factory
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.createNotification = function (type) {
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
    };
    return NotificationFactory;
}());
// Client code
var smsNotification = NotificationFactory.createNotification('SMS');
smsNotification.send('Hello from SMS!');
var emailNotification = NotificationFactory.createNotification('Email');
emailNotification.send('Hello from Email!');
var pushNotification = NotificationFactory.createNotification('Push');
pushNotification.send('Hello from Push Notification!');
