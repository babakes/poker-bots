// content.js
function extractGameState() {
    // placeholder: later we’ll parse the page to get cards, bets, etc.
    return { example: "game state placeholder" };
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        const gameData = extractGameState();
        if (gameData) {
            browser.runtime.sendMessage({ type: 'GAME_STATE', data: gameData });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
