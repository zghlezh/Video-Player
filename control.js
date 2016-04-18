

window.addEventListener("load", function () 
{
    
});

$(function(){
   
    
      var video = byId("video");
  //play the video ro pause the video
  $("#playOrPause").click(function(){
    console.log(video.paused);
     if(video.paused){
         video.play();
     }
    else video.pause();
  });
  
  //stop the video 
  $("#stop").click(function(){
    $("#video").load();
  });
  //fast forward
    $("#ffd").click(function(){
         var currentTime = (byId("video").currentTime); 
         var  duration = (byId("video").duration); 
         var ffd = duration - 5;
        console.log(currentTime);
         if (currentTime >  ffd || currentTime == ffd){
            currentTime = duration; 
            console.log(currentTime);
         }
         else{
           currentTime = currentTime + 5;
           console.log(currentTime);
         }
 });
  //fast backward
    $("#fbd").click(function(){
        var currentTime = video.currentTime;
      console.log(currentTime);
       currentTime -= 5;
       console.log(currentTime);
 });
  //mute
    $("#mute").click(function(){   
     video.muted = true;
 });

  
  
});


