interface GameState {
    [key: string]: any; // placeholder for actual game state properties
}

function extractGameState(): GameState {
    // placeholder: later parse page for cards, bets, etc.
    return { example: "game state placeholder" };
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const gameData = extractGameState();
        if (gameData) {
            browser.runtime.sendMessage({ type: 'GAME_STATE', data: gameData });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
