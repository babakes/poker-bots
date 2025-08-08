document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('grab-dom');
  
    if (!button) {
      console.error('DOM grab button not found');
      return;
    }
  
    button.addEventListener('click', async () => {
      try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  
        if (!tabs[0]?.id) {
          console.error('No active tab or missing tab ID');
          return;
        }
  
        await browser.tabs.sendMessage(tabs[0].id, { action: 'grabDOM' });
        console.log('Message sent to content script');
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    });
  });
  