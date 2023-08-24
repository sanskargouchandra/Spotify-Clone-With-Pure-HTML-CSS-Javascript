 
 //Initialize vareable

 let songIndex = 0;
 let audioElement = new Audio("https://docs.google.com/uc?export=open&id=1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ")
 let masterPlay = document.getElementById("masterPlay");
 let myProgressBar = document.getElementById("myProgressBar");

 let song = [
    {songName: "Ram Siya Ram", filePath: "./song.mp3" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
    {songName: "Ram Siya Ram", filePath: "https://drive.google.com/file/d/1TS6bh6DwVQ0AbD0lP7jNNLwBUgp2nDmJ/view?usp=drive_link" , coverPath: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg"},
 ]

 //Handel Play/Paus click:

 masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src="https://img.icons8.com/bubbles/50/pause.png"
    }else{
        audioElement.pause();
        masterPlay.src="https://img.icons8.com/bubbles/50/circled-play.png"
    }
 })

 //Listen to Event
audioElement.addEventListener("timeupdate", ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myProgressBar.value=progress;
})

audioElement.addEventListener("change", ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})