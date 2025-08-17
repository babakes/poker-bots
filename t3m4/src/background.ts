// WebSocket client to connect to c3po server
let ws: WebSocket;

function connectToC3PO() {
    ws = new WebSocket('ws://localhost:8080'); // adjust port if needed

    ws.onopen = () => {
        console.log("Connected to c3po WebSocket server");
    };

    ws.onclose = () => {
        console.log("WebSocket connection closed, retrying in 2s...");
        setTimeout(connectToC3PO, 2000);
    };

    ws.onerror = (err) => {
        console.error("WebSocket error:", err);
        ws.close();
    };
}

connectToC3PO();


interface Message {
    type: string;
    data: any;
}

browser.runtime.onMessage.addListener((message: Message) => {
    if (message.type === 'GAME_STATE') {
        console.log("Received game state:", message.data);
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message.data));
        }
    }
});
