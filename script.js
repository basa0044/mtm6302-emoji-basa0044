const emoji = [ ]

for (let i = 128506 ; i <= 128591; i++){
    emoji.push(/*html*/ `<p class=emoji style="text-align: center;"><span 
    style="font-size: 5rem;">&#${i};</span><br><code>${i}</code></p>`)
}

for (let i = 128640 ; i <= 128653; i++){
    emoji.push(/*html*/ `<p class=emoji style="text-align: center;"><span 
    style="font-size: 5rem;">&#${i};</span><br><code>${i}</code></p>`)
}

const $body = document.getElementById('body')

$body.innerHTML += emoji.join('')

