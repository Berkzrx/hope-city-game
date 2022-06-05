
// Adicionando elementos HTML à constantes.
const personagem = document.querySelector('.personagem');
const obstacle = document.querySelector('.obstacle');
const background = document.querySelector('.bg');
const floor = document.querySelector('.floor');
const endGame = document.querySelector('.end');
const gameArea = document.querySelector('.game-area');
const restartButton = document.querySelector('.restart-button');
const startMessage = document.querySelector('.start-message');
const plane = document.querySelector('.plane');
const bgAudio = new Audio('./assets/audios/audio-de-fundo.mp3');

bgAudio.play();
bgAudio.volume = .3;
bgAudio.loop = true;

// Adicionando um evento 'keydown' na janela do browser que irá iniciar o jogo assim que apertar a tecla 'Espaço' do teclado.
window.addEventListener('keydown', (event) => {

    if(event.code === 'Space'){
        background.classList.add('bg-start');
        obstacle.classList.add('obstacle-start');
        personagem.style.width = '80px';
        startMessage.style.opacity = '0';
        floor.classList.add('floor-start'); 
        plane.classList.add('plane-start');
    }
});

// Criando função 'jump' que adiciona a classe CSS com animação do pulo no personagem e após 600ms, retira.
const jump = () => {

    bgAudio.volume = .3;

    const jumpSound = new Audio('./assets/audios/jump.mp3');
    jumpSound.play();
    jumpSound.volume = .2; 

    personagem.classList.add('jump');

    personagem.src = './assets/images/dog-jump.png';

    // Função reserveda do JS que determina um tempo para uma função ser executada automaticamente.
    setTimeout(() => {
        personagem.classList.remove('jump'); 
        personagem.src = './assets/images/dog-correndo.gif';
    }, 500); //Neste caso, a função será executada após 600ms;
    
};

// Adicionando um evento 'keydown' que irá checar as distâncias em px, entre o personagem, e o obstáculo.
window.addEventListener('keydown', (event) => {

    if(event.code === 'Space'){

        jump();
    
        const loop = setInterval(() => {
    
    
            const personagemPosition = Number((window.getComputedStyle(personagem).bottom).replace('px', ' '));
            const obstaclePosition = Number((window.getComputedStyle(obstacle).left).replace('px', ' '));
        
        
            if (personagemPosition < 63 && obstaclePosition <= 170 && obstaclePosition > 0){
        
                const dead = new Audio ('./assets/audios/dead.mp3');
                dead.play();
                dead.volume = .5;

                setTimeout(() => {
                    bgAudio.volume = 0;
                },500);

                personagem.src = './assets/images/dog-dead.png';
                
                obstacle.classList.remove('obstacle-start');
                
                floor.classList.remove('floor-start');
    
                background.classList.remove('bg-start');
        
                endGame.classList.add('game-over');
        
                restartButton.style.display =  'block';

                clearInterval(loop);
            };           
        }, 10);
    }
});

function reset(){

    background.classList.remove('bg-start');
    personagem.src = './assets/images/dog.png';
    obstacle.style.right = `-60px`;
    obstacle.classList.remove('obstacle-start');
    personagem.style.width = '60px'; 
    endGame.classList.remove('game-over');
    restartButton.style.display = 'none'; 
    startMessage.style.opacity = '1';
    
};

restartButton.addEventListener('click', () => {
    reset();
});

