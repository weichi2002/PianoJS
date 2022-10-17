const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl){
    console.log(newUrl)
    new Audio(newUrl).play()

}

pianoKeys.forEach((pianoKey, i) =>{
    const reMap = ['C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','Cb4','C4','Db4','D4','Eb4','E4','Fb4','F4','Gb4','G4','Ab4','A4']
    const newUrl = 'piano-mp3/' + reMap[i] + '.mp3'
    pianoKey.addEventListener('click', ()=> playSound(newUrl))
})