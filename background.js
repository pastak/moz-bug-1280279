function fetchImage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const imgUrl = 'https://i.gyazo.com/fbe699a57bffa278e8ff3600dffd3702.jpg'
    const xhr = new window.XMLHttpRequest()
    xhr.open('GET', imgUrl, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = () => {
      const blob = new window.Blob([xhr.response], {type: 'image/png'})
      chrome.tabs.sendMessage(tabs[0].id, {imageBlobUrl: window.URL.createObjectURL(blob)})
    }
    xhr.send()
  })
}

chrome.browserAction.onClicked.addListener(fetchImage)
