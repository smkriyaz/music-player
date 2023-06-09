document.getElementsByClassName("master")[0].addEventListener("click",function(){
  var audio=  document.getElementById("master");
  audio.play();
  document.getElementsByClassName("bottom")[0].innerHTML="Playing Master"

})
document.getElementsByClassName("master")[1].addEventListener("click",function(){
    var audio1=  document.getElementById("master");
    audio1.pause();
    document.getElementsByClassName("bottom")[0].innerHTML="Paused Master"
  })

  document.getElementsByClassName("maanaadu")[0].addEventListener("click",function(){
    var audio=document.getElementById("maanadu");
    audio.play();
    document.getElementsByClassName("bottom")[0].innerHTML="Playing Maanaadu";
  })
  document.getElementsByClassName("maanaadu")[1].addEventListener("click",function(){
    var audio=document.getElementById("maanadu");
    audio.pause();
    document.getElementsByClassName("bottom")[0].innerHTML="Paused Maanaadu";
  })


  document.getElementsByClassName("love")[0].addEventListener("click",function(){
    var audio=document.getElementById("love");
    audio.play();
    document.getElementsByClassName("bottom")[0].innerHTML="Playing Lovetoday";
  })
  document.getElementsByClassName("love")[1].addEventListener("click",function(){
    var audio=document.getElementById("love");
    audio.pause();
    document.getElementsByClassName("bottom")[0].innerHTML="Paused lovetoday";
  })

  document.getElementsByClassName("vikram")[0].addEventListener("click",function(){
    var audio=document.getElementById("vikram");
    audio.play();
    document.getElementsByClassName("bottom")[0].innerHTML="Playing vikram";
  })
  document.getElementsByClassName("vikram")[1].addEventListener("click",function(){
    var audio=document.getElementById("vikram");
    audio.pause();
    document.getElementsByClassName("bottom")[0].innerHTML="Paused vikram";
  })
