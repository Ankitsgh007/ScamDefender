document.getElementById('report').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      alert(`Reported ${url} as a scam.`);
      // Optionally: send to backend or store in storage
    });
  });
  