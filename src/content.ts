browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'grabDOM') {
      const html = document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dom.html';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();
  
      URL.revokeObjectURL(url);
  
      console.log('DOM snapshot saved');
    }
  });
  