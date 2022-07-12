const theme = document.getElementById('chk');

theme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const PLAY = document.getElementById("btn-play");
const PAUSE = document.getElementById("btn-pause");
const STOP = document.getElementById("btn-stop");

PLAY.addEventListener('click', play);
PAUSE.addEventListener('click', pause);
STOP.addEventListener('click', stop);

let hours = 0; minutes = 0; seconds = 0; tempo = 1000; cron = '';

function play (){
    cron = setInterval(() => {
        timer();
    }, tempo);

}

function pause (){
    clearInterval(cron);
}

function stop (){
    clearInterval(cron);
    hours = 0; minutes = 0; seconds = 0;

    document.getElementById('timer').innerText = "00:00:00";
}

function timer (){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    document.getElementById('timer').innerText = format;
}