let songIndex=01;
let audioElement=new Audio('songs/11.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[

{songName:"Warriyo - Mortals [NCS Release]",filepath:"songs/11.mp3",coverpath:"covers/1.jpg"},
{songName:"Cielo - Huma-Huma",filepath:"songs/21.mp3",coverpath:"covers/2.jpg"},
{songName:"DEAF KEV - Invincible [NCS Release]-320k",filepath:"songs/31.mp3",coverpath:"covers/3.jpg"},
{songName:"Different Heaven & EH!DE - My Heart",filepath:"songs/41.mp3",coverpath:"covers/4.jpg"},
{songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filepath:"songs/51.mp3",coverpath:"covers/5.jpg"},
{songName:"Rabba - Salam-e-Ishq",filepath:"songs/61.mp3",coverpath:"covers/6.jpg"},
{songName:"Sakhiyaan - Salam-e-Ishq",filepath:"songs/71.mp3",coverpath:"covers/7.jpg"},
{songName:"Bhula Dena - Salam-e-Ishq",filepath:"songs/81.mp3",coverpath:"covers/8.jpg"},
{songName:"Tumhari Kasam - Salam-e-Ishq",filepath:"songs/91.mp3",coverpath:"covers/9.jpg"},
{songName:"Na Jaana - Salam-e-Ishq",filepath:"songs/101.mp3",coverpath:"covers/10.jpg"}


]

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src=songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});




masterPlay.addEventListener('click',()=>{

if(audioElement.paused||audioElement.currentTime<=0){
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;

}

else{

  audioElement.pause();
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');
  gif.style.opacity=0;


}



})

audioElement.addEventListener('timeupdate',()=>{

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value=progress;



})


myprogressbar.addEventListener('change',()=>{

audioElement.currentTime=myprogressbar.value*audioElement.duration/100;



})

const makeAllPlays = ()=>{

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{

element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');

})

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src=`songs/${songIndex}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{

if(songIndex>=101){
  songIndex=11;
}
else{
  songIndex+=10;
}

audioElement.src=`songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');



})




document.getElementById('previous').addEventListener('click',()=>{

if(songIndex<=11){
  songIndex=101;
}
else{
  songIndex-=10;
}

audioElement.src=`songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');



})
