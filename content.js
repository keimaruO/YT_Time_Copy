const copyShortcut = {
  ctrlKey: true,
  key: 'b', // ←ここに割り当てたいショートカットキーを入力してください
};

function getCurrentTime() {
  const video = document.querySelector('video');
  if (video) {
    const timeInSeconds = video.currentTime;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return (hours > 0 ? hours + ':' : '') + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  }
  return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getCurrentTime') {
    sendResponse(getCurrentTime());
  }
});

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey === copyShortcut.ctrlKey && event.key === copyShortcut.key) {
    const currentTime = getCurrentTime();
    if (currentTime) {
      navigator.clipboard.writeText(currentTime).then(() => {
        console.log(`現在の再生時間 ${currentTime} がクリップボードにコピーされました。`);
      });
    } else {
      console.error('現在の再生時間を取得できませんでした。');
    }
  }
});
