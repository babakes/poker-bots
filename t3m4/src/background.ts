interface Message {
    type: string;
    data: any;
}

browser.runtime.onMessage.addListener((message: Message) => {
    if (message.type === 'GAME_STATE') {
        console.log("Received game state:", message.data);
        // sendToC3PO(message.data); // we’ll implement this next
    }
});
