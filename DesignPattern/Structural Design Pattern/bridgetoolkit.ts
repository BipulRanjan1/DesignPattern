
abstract class UIToolkit {
    protected platform: Platform;
 
    constructor(platform: Platform) {
        this.platform = platform;
    }
 
    abstract drawButton(): void;
    abstract drawTextBox(): void;
}
 

interface Platform {
    drawShape(shape: string): void;
}
 

class DesktopPlatform implements Platform {
    drawShape(shape: string): void {
        console.log(`Drawing ${shape} on desktop platform`);
    }
}
 
class WebPlatform implements Platform {
    drawShape(shape: string): void {
        console.log(`Drawing ${shape} on web platform`);
    }
}
 
class MobilePlatform implements Platform {
    drawShape(shape: string): void {
        console.log(`Drawing ${shape} on mobile platform`);
    }
}
 

class DesktopUIToolkit extends UIToolkit {
    drawButton(): void {
        this.platform.drawShape('Button');
    }
 
    drawTextBox(): void {
        this.platform.drawShape('TextBox');
    }
}
 
class WebUIToolkit extends UIToolkit {
    drawButton(): void {
        this.platform.drawShape('Button');
    }
 
    drawTextBox(): void {
        this.platform.drawShape('TextBox');
    }
}
 
class MobileUIToolkit extends UIToolkit {
    drawButton(): void {
        this.platform.drawShape('Button');
    }
 
    drawTextBox(): void {
        this.platform.drawShape('TextBox');
    }
}
 
// Usage
const desktopPlatform = new DesktopPlatform();
const desktopUIToolkit = new DesktopUIToolkit(desktopPlatform);
desktopUIToolkit.drawButton(); 
desktopUIToolkit.drawTextBox(); 

const webPlatform = new WebPlatform();
const webUIToolkit = new WebUIToolkit(webPlatform);
webUIToolkit.drawButton(); 
webUIToolkit.drawTextBox(); 
 
const mobilePlatform = new MobilePlatform();
const mobileUIToolkit = new MobileUIToolkit(mobilePlatform);
mobileUIToolkit.drawButton(); 
mobileUIToolkit.drawTextBox(); 
 