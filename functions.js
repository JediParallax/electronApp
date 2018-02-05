const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Open New Window'
button.addEventListener('click', () => {
    var window = remote.getCurrentWindow()
    main.openWindow('pageTwo.html')
    window.close()
}, false)
document.body.appendChild(button)