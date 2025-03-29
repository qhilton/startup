class EventMessage {
    constructor(from, value) {
        this.from = from;
        this.value = value;
    }
}

class Notifier {
    events = [];
    handlers = [];

    constructor() {
        // let port = window.location.port;
        let port = 4000;
        console.log("port", port);
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        console.log("protocol", protocol);
        console.log("window.location.hostname", window.location.hostname);

        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        console.log("socket", this.socket);

        console.log("i hate this class");
        this.socket.onopen = (event) => {
            console.log("WebSocket connected");
            this.receiveEvent(new EventMessage('Recipebook', { msg: 'connected' }));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Recipebook', { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
            console.log("onmessage", msg);
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, value) {
        const event = new EventMessage(from, value);
        console.log("Broadcasting event:", event);
        console.log("readyState", this.socket.readyState);
        console.log("open", WebSocket.OPEN);
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(event));
        } else {
            this.socket.onopen = () => {
                this.socket.send(JSON.stringify(event));
            };
        }
    }

    addHandler(handler) {
        console.log("addHandler");
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        console.log("removeHandler");
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((e) => {
        this.handlers.forEach((handler) => {
            handler(e);
        });
        });
    }
}

const notifier = new Notifier();
export { notifier };
