// Função para mutar/desmutar sons do jogo
const muted = () => {

    let clickContador = 0;

    const soundOutput = document.querySelector('.sound-button');
    soundOutput.addEventListener('click', () =>{

    clickContador++;

    if(clickContador % 2 === 0){

        bgAudio.muted = false;
        jumpSound.muted = false;
        dead.muted = false;
        soundOutput.src = './assets/images/sound-icon.png';
        
    }else{
        
        bgAudio.muted = true;
        jumpSound.muted = true;
        dead.muted = true;
        soundOutput.src = './assets/images/muted-sound-icon.png';
    }
})
};
muted();