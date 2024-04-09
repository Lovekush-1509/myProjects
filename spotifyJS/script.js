let play = document.querySelector('#masterPlay');
let beat = document.querySelector('#beats');
let progressBar = document.querySelector('#range');
let song = new Audio("songs/1.mp3");
let songIndex = 0;
let songItem = Array.from(document.querySelectorAll('.songItem'));
let songList = [
    {songName:'main yahn hu' , songPath:'songs/1.mp3',imgPath:'images/mai yahn hu.jpg'},
    {songName: 'clandestina', songPath:'song/2.mp3',imgPath:'images/clandestina.jpg'},
    {songName:'Ae dil hai muskil',songPath:'songs/3.mp3',imgPath:'images/ae dil hai muskil.jpg'},
    {songName:'main yahn hu' , songPath:'songs/1.mp3',imgPath:'images/mai yahn hu.jpg'},
    {songName: 'clandestina', songPath:'songs/2.mp3',imgPath:'images/clandestina.jpg'},
    {songName:'Ae dil hai muskil',songPath:'songs/3.mp3',imgPath:'images/ae dil hai muskil.jpg'},
    {songName:'main yahn hu' , songPath:'songs/1.mp3',imgPath:'images/mai yahn hu.jpg'},
    {songName: 'clandestina', songPath:'songs/2.mp3',imgPath:'images/clandestina.jpg'},
    {songName:'Ae dil hai muskil',songPath:'songs/3.mp3',imgPath:'images/ae dil hai muskil.jpg'},
]

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songList[i].imgPath;
    element.getElementsByClassName('songName')[0].innerText = songList[i].songName;
});

play.addEventListener('click',() => {
    if(song.paused || song.currentTime == 0){
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        beat.style.opacity = 1;
    }else{
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        beat.style.opacity = 0;
    }
});

song.addEventListener('timeupdate', () =>{
    songTime = parseInt((song.currentTime/song.duration)*100);
    progressBar.value = songTime;
});

progressBar.addEventListener('change',() => {
    song.currentTime = progressBar.value*song.duration/100;
});


let playSong = Array.from(document.querySelectorAll('.playSong'));


playSong.forEach((element) => {
    element.addEventListener('click', (e) =>{
        console.log(e.target);
        makeOtherStop();
        let index = parseInt(e.target.id);
        if(index%3 != 0 || index == 0){
            songIndex = (index)%3;
        }else{
            songIndex = 3;
        }
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        song.src = `songs/${songIndex}.mp3`;
        song.currentTime = 0;
        song.play();
        beat.style.opacity = 1;
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    });
});

makeOtherStop = () => {
    playSong.forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    });
}

let prev = document.querySelector('#previous');
let next = document.querySelector('#forward');

prev.addEventListener('click',() =>{
    if(songIndex == 1){
        songIndex = 3;
    }else{
        songIndex--;
    }
    song.src = `songs/${songIndex}.mp3`;
        song.currentTime = 0;
        song.play();
        beat.style.opacity = 1;
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
});

next.addEventListener('click',() =>{
    if(songIndex == 3){
        songIndex = 1;
    }else{
        songIndex++;
    }
    song.src = `songs/${songIndex}.mp3`;
        song.currentTime = 0;
        song.play();
        beat.style.opacity = 1;
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
});