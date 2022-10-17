const emoji = [ ]

for (let i = 128512 ; i <= 128586; i++){
    emoji.push(/*html*/ `<p class=emoji style="text-align: center;"><span 
    style="font-size: 5rem;">&#${i};</span><br><code>${i}</code></p>`)
}

const $body = document.getElementById('body')

$body.innerHTML += emoji.join('')

