// === 5. DEPENDANCY INVERSION PRINCIPLE (DIP) ===

//High-level modules should not depend on low-level modules. Both should depend on abstractions.
// Abstractions should not depend on details. Details should depend on abstractions.

// Bad: Violating DIP
class EmailSender {
    sendEmail(message) {
      console.log(`Sending email: ${message}`);
    }
  }
  
  class NotificationService {
    constructor() {
      this.emailSender = new EmailSender();
    }
  
    notify(message) {
      this.emailSender.sendEmail(message);
    }
  }
  
  // Good: Following DIP
  class MessageSender {
    send(message) {
      throw new Error("Method 'send' must be implemented");
    }
  }
  
  class EmailSender extends MessageSender {
    send(message) {
      console.log(`Sending email: ${message}`);
    }
  }
  
  class SMSSender extends MessageSender {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  class NotificationService {
    constructor(messageSender) {
      this.messageSender = messageSender;
    }
  
    notify(message) {
      this.messageSender.send(message);
    }
  }
  
  // Usage
  const emailNotifier = new NotificationService(new EmailSender());
  emailNotifier.notify("Hello via email");
  
  const smsNotifier = new NotificationService(new SMSSender());
  smsNotifier.notify("Hello via SMS");