let index = 0;
let audioElement =  new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let play = document.getElementById('fa-2x');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Hikaru Nara - Your Lie In April", filepath: "songs/1.mp3", coverpath: "cover/1.jpg"},
    {songName: "You Can Become A Hero - My Hero Academia OST", filepath: "songs/2.mp3", coverpath: "cover/2.jpg"},
    {songName: "Takagi San Season 3 Op", filepath: "songs/3.mp3", coverpath: "cover/3.jpg"},
    {songName: "Mrs. GREEN APPLE Inferno", filepath: "songs/4.mp3", coverpath: "cover/4.jpg"},
    {songName: "NEFFEX - Destiny 🙌", filepath: "songs/5.mp3", coverpath: "cover/5.jpg"},
    {songName: "SLANDER - Love Is Gone ft. Dylan Matthew (Acoustic)", filepath: "songs/6.mp3", coverpath: "cover/6.jpg"},
    {songName: "The Kid LAROI - WITHOUT YOU ", filepath: "songs/7.mp3", coverpath: "cover/7.jpg"},
]
// audioElement.play();
songitem.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})

//handle play
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log('play');
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// play.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         console.log('play');
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterplay.classList.remove('fa-circle-pause');
//         masterplay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;
//     }
// })

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    if(progress == 100){
        if(index >= 6){
            index =0;
        }
        else{
            index +=1;
        }
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.play();
        mastersongname.innerText = songs[index].songName;
    }
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('fa-2x')).forEach(element =>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
}


Array.from(document.getElementsByClassName('fa-2x')).forEach(element => {
    element.addEventListener(('click'),(e)=>{
        index = parseInt(e.target.id);
        makeallplays();
        audioElement.src = `songs/${index+1}.mp3`;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.play();
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mastersongname.innerText = songs[index].songName;
        gif.style.opacity = 1;
        // if(!audioElement.paused){
        //     e.target.classList.add('fa-circle-play');
        //     e.target.classList.remove('fa-circle-pause');
        //     audioElement.pause();
        // }
    })

});
// Array.from(document.getElementsByClassName('fa-2x')).forEach(element => {
//     element.addEventListener(('click'),(e)=>{
//         index = parseInt(e.target.id);
//         audioElement.src = `songs/${index+1}.mp3`;
//         if(!audioElement.paused){
//             e.target.classList.add('fa-circle-play');
//             e.target.classList.remove('fa-circle-pause');
//             audioElement.pause();
//             masterplay.classList.add('fa-circle-play');
//             masterplay.classList.remove('fa-circle-pause');
//             gif.style.opacity = 0;
//             console.log("diff");
//         }
//         else{
//             makeallplays();
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.play();
//         audioElement.currentTime = 0;
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//         console.log("diff play");
//         gif.style.opacity = 1;
//         }
//         mastersongname.innerText = songs[index].songName;
        
        
//         // if(!audioElement.paused){
//         //     e.target.classList.add('fa-circle-play');
//         //     e.target.classList.remove('fa-circle-pause');
//         //     audioElement.pause();
//         // }
//     })

// });

// play.addEventListener('click',()=>{
//     index = parseInt(play.id);
//     makeallplays();
//     audioElement.src = `songs/${index+1}.mp3`;
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         console.log('play');
//         play.classList.remove('fa-circle-play');
//         play.classList.add('fa-circle-pause');
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         play.classList.remove('fa-circle-pause');
//         play.classList.add('fa-circle-play');
//         masterplay.classList.add('fa-circle-play');
//         masterplay.classList.remove('fa-circle-pause');
//         gif.style.opacity = 0;
//     }
// })


document.getElementById('next').addEventListener('click',()=>{
    if(index >= 6){
        index =0;
    }
    else{
        index +=1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mastersongname.innerText = songs[index].songName;
        makeallplays();
        
        document.getElementById(`${index}`).classList.remove('fa-circle-play');
        document.getElementById(`${index}`).classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index <= 0){
        index =6;
    }
    else{
        index -=1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mastersongname.innerText = songs[index].songName;
})