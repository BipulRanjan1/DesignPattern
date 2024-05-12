interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}


class Tier1Support implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request === 'Internet') {
            console.log(" Resolved by frontline support.");
        } else if (this.nextHandler) {
            console.log(" Unable to resolve by frontline support, escalating to Tier 2.");
            this.nextHandler.handle(request);
        } else {
            console.log(" Unable to resolve, ticket closed.");
        }
    }
}


class Tier2Support implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request === 'software') {
            console.log("Resolved by Tier 2 support.");
        } else if (this.nextHandler) {
            console.log("Unable to resolve by Tier 2, escalating to Tier 3.");
            this.nextHandler.handle(request);
        } else {
            console.log("Unable to resolve, ticket closed.");
        }
    }
}

class Tier3Support implements Handler {
    setNext(handler: Handler):Handler{return handler}

    handle(request: string): void {
        if (request === 'network') {
            console.log(" Resolved by Tier 3 support.");
        } else {
            console.log(" Unable to resolve, ticket closed.");
        }
    }
}


const frontline = new Tier1Support();
const tier2 = new Tier2Support();
const tier3 = new Tier3Support();

frontline.setNext(tier2).setNext(tier3)


frontline.handle('Internet'); 
frontline.handle('software'); 
frontline.handle('network');  
frontline.handle('other');    
