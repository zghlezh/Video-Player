

window.addEventListener("load", function () 
{
    
});

$(function(){
  //play the video ro pause the video
  $("#playOrPause").click(function(){
     if($("#video").paused){
     $("#video").attr("paused","false");
     }
    else $("#video").attr("paused","true");
  });
  
  //stop the video 
  $("#stop").click(function(){
    $("#video").load();
  });
  //fast forward
    $("#ffd").click(function(){
    $("#video").currentTime+10;
 });
  //fast backward
    $("#fbd").click(function(){
    $("#video").currentTime-10;
 });
  //mute
    $("#mute").click(function(){
    $("#video").muted=true;
 });

  
});

