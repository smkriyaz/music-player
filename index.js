
    document.querySelectorAll("button")[2].addEventListener("click" , songMaster);


 function songMaster(){
     var audio = new Audio('songs/Master.mp3');
    audio.play();
    
     document.querySelectorAll("p")[0].innerHTML="Now Playing  Vaathi Coming";
    
 }

 document.querySelectorAll("button")[3].addEventListener("click" , songmaanadu);
 
 function songmaanadu(){
     var audio=new Audio('songs/maanadu.mp3');
    audio.play();
     document.querySelectorAll("p")[0].innerHTML="Now Playing  Maanaadu";
 }

 document.querySelectorAll("button")[4].addEventListener("click", lovetoday);

 function lovetoday(){
     var audio=new Audio('songs/love today.mp3');
     audio.play();
     document.querySelectorAll("p")[0].innerHTML="Now Playing  Love Today ";
 }



 document.querySelectorAll("button")[5].addEventListener("click", vikram);

 function vikram(){
     var audio=new Audio('songs/vikram.mp3');
    audio.play();

     document.querySelectorAll("p")[0].innerHTML="Now Playing Vikram";
 }

    document.querySelectorAll("p")[0].innerHTML="Now Playing  Love Today ";




document.querySelectorAll(".vikram")[0].addEventListener("click", vikram);

function vikram(){
    var audio=new Audio('songs/vikram.mp3');
    audio.play();
    document.querySelectorAll("p")[0].innerHTML="Now Playing Vikram";
}



//     document.querySelectorAll("button")[2].addEventListener("click" , songMaster);



// function songMaster(){
//     var audio = new Audio('songs/Master.mp3');
//     audio.play();
//     document.querySelectorAll("p")[0].innerHTML="Now Playing  Vaathi Coming";
    
// }

// document.querySelectorAll("button")[3].addEventListener("click" , songmaanadu);
 
// function songmaanadu(){
//     var audio=new Audio('songs/maanadu.mp3');
//     audio.play();
//     document.querySelectorAll("p")[0].innerHTML="Now Playing  Maanaadu";
// }

// document.querySelectorAll("button")[4].addEventListener("click", lovetoday);

// function lovetoday(){
//     var audio=new Audio('songs/love today.mp3');
//     audio.play();
//     document.querySelectorAll("p")[0].innerHTML="Now Playing  Love Today ";
// }



// document.querySelectorAll("button")[5].addEventListener("click", vikram);

// function vikram(){
//     var audio=new Audio('songs/vikram.mp3');
//     audio.play();
//     document.querySelectorAll("p")[0].innerHTML="Now Playing Vikram";
// }

