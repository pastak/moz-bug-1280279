chrome.runtime.onMessage.addListener(function (msg) {
  if (!msg.imageBlobUrl) return
  const xhr = new window.XMLHttpRequest()
  xhr.open('GET', msg.imageBlobUrl, true)
  xhr.responseType = 'arraybuffer'
  xhr.onload = () => {
    const blob = new window.Blob([xhr.response], { type: 'image/png' })
    const img = document.createElement('img')
    img.src = window.URL.createObjectURL(blob)
    document.body.appendChild(img)
  }
  xhr.onerror = (e) => {
    console.error(e)
  }
  xhr.send()
})
