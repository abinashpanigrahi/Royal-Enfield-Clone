document.querySelector("#journeyDiv").addEventListener("mouseover", function(){
    document.querySelector("#pauseBtn").style.display = "block";
})

document.querySelector("#journeyDiv").addEventListener("mouseout", function(){
    document.querySelector("#pauseBtn").style.display = "none";
})

document.querySelector("#pauseBtn").addEventListener("click", function(){
    var pause = document.querySelector("#pause");
    var play = document.querySelector("#play");
    var video = document.querySelector("video");
    if(pause.style.display==="none"){
        pause.style.display = "block";
        play.style.display = "none";
        video.play();
    }
    else{
        play.style.display = "block";
        pause.style.display = "none";
        video.pause();
    }
})



// /* TRYING TO PREVEMT ANCHOR TAGS TO RELOAD */

// document.querySelectorAll("a").addEventListener("click", stopReload);

// function stopReload(event){
//     event.preventDefault();
//     // if(event.target.href == ""){
//     //     event.preventDefault();
//     // }
// }