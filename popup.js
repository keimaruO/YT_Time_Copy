document.getElementById('copyTime').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getCurrentTime' }, (response) => {
        if (response) {
          navigator.clipboard.writeText(response).then(() => {
            alert(`現在の再生時間 ${response} がクリップボードにコピーされました。`);
          });
        } else {
          alert('現在の再生時間を取得できませんでした。');
        }
      });
    });
  });
  