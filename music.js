const songs = [{
    name: '1',
    Artist: 'Surya ',
    tittle: 'Rolex',
},
{
    name: '2',
    Artist: 'Vijay ',
    tittle: 'Ordinary Person',
},
{
    name: '3',
    Artist: ' Paradox',
    tittle: 'Jadugar',
}
];
const audio = document.querySelector("audio");
const music = document.querySelector("#icon2");
const irjbghswss = document.querySelector("#input") ;
const Previous = document.querySelector("#icon1");
const Next = document.querySelector("#icon3");
const anim = document.querySelector(".image");
const image = document.querySelector("img");
const Auther = document.querySelector(".auther");
const tittle = document.querySelector(".tittle");
let progresspartt = document.querySelector(".progresspart");
let durations = document.querySelector(".duration");
const currenttime = document.querySelector("#currenttime");
const progresdiv = document.querySelector(".progressdiv");


let isplaying = true;
//Playing 
const play = () => {
    audio.play();
    isplaying = false;
    anim.classList.add("anime");
    music.classList.replace("fa-play", "fa-pause");
}
const pause = () => {
    audio.pause();
    isplaying = true;
    anim.classList.remove("anime");
    music.classList.replace("fa-pause", "fa-play");
}
music.addEventListener('click', () => {
    isplaying ? play() : pause();
})
const loading = (songs) => {
    tittle.textContent = songs.tittle;
    Auther.textContent = songs.Artist;
    image.src = `./m.jpg/bestsy${songs.name}.jpg`;
    audio.src = `./Audio/audio${songs.name}.mp3`;
};
// progrese barr
var songindex = 0;
loading(songs[songindex]);



audio.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progresspartt.style.width = `${progress_time}%`;
 
    
  
    //  Duration tim
    
    let mindur = Math.floor(duration / 60);
    let secdur =Math.floor(duration % 60);
    let total_duration=`${mindur}:${secdur}`;
    if(duration){
        durations.textContent=total_duration;
    }
    //  curent time

    let mincur = Math.floor(currentTime / 60);
    let seccur =Math.floor(currentTime % 60);
    if(seccur<10){
        seccur=`0${seccur}`
    }
    let total_currenttimee=`${mincur}:${seccur}`;
    if(currentTime){
        currenttime.textContent=total_currenttimee;
    }
})
progresdiv.addEventListener('click',(event)=>{
    const {  duration } = audio;
    let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
    audio.currentTime=move_progress;
})
 //Next button
const nextsong=()=>{
    songindex = (songindex + 1) % songs.length;
    loading(songs[songindex]);
    play();

}                             
//Previous button
const prevsong =()=>{    
    songindex = (songindex - 1 + songs.length) % songs.length;
    loading(songs[songindex]);
    play();

}
audio.addEventListener('ended',nextsong);
Next.addEventListener('click',nextsong);
Previous.addEventListener('click', prevsong);




 

