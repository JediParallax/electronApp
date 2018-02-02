const loader = require('monaco-loader')

loader().then( monaco => {
    let editor = monaco.editor.create(
        document.querySelector('#app'),
        {
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true

        }
    )
})