// singleton pattern for logger by typescript
 
class Logger {
    private static instance: Logger | null = null;
 
    private constructor() {}
 
    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
 
    log(message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }
}
 
// Example usage:
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
 
console.log(logger1 === logger2); // Output: true
 
logger1.log("This is a log message."); // Output: [timestamp] This is a log message.
logger2.log("Another log message.");    // Output: [timestamp] Another log message