const button = document.getElementById("button");
const music = document.getElementById("music");
const icon = document.getElementById("icon");

const audio = new Audio("./Serenada.mp3");
audio.loop = true;
let musicPlay = false;

music.addEventListener('click', () => {
    icon.classList.toggle("fa-play-circle");
    icon.classList.toggle("fa-pause-circle");

    if(!musicPlay) {
        audio.play();
        musicPlay = true;
    }
    else if(musicPlay) {
        audio.pause();
        musicPlay = false;
    }
})

const colors = [
    'a', 'b', 'c', 'd',
    'e','f', '0', '1',
    '2', '3', '4', '5',
    '6', '7', '8', '9',
];

button.addEventListener("click", generator)

function generator() {
    const randomColor1 = colorGenerator();
    const randomColor2 = colorGenerator();
    const randomDeg = Math.floor(Math.random() * 361);
    const code = document.getElementById("code");
    
    document.body.style.background = code.innerText = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2})`;
}

function colorGenerator() {
    let randomColor = '#';
    for(let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * colors.length);
        randomColor += colors[random];
    }
    return randomColor;
}

generator();