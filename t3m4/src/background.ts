browser.runtime.onInstalled.addListener(() => {
    console.log("t3m4 is ready!");
});

browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.method === "POST") {
        console.log("Captured POST request:", details);
        }
    },
    { urls: ["<all_urls>"] },
    ["requestBody"]
);