window.addEventListener("load", function () 
{
    console.log("Video Player");
});
window.onload = function ()
{
    getCurrentTime();
};
//window.onload=getLocation;
function change()
{
    document.getElementById("h1").innerHTML = "MPlayer";
};
function failed(e) 
{
    // video playback failed - show a message saying why
    switch (e.target.error.code) 
    {
        case e.target.error.MEDIA_ERR_ABORTED:
            alert('You aborted the video playback.');
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            alert('A network error caused the video download to fail part-way.');
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
            break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
            break;
        default:
            alert('An unknown error occurred.');
            break;
    }
};

function list(){
  if($("#list").is(":hidden")){
      $.get("json/list.json",function(data,status){
       console.log("Data: " + data + "\nStatus: " + status);
       console.log(data[0].getString());
      });  
      
      
      $("#video").hide(500);
        $("#list").show();
        
    }
    else { 
        $("#list").hide();
        $("#video").show();}
}

function getCurrentTime()
{
    /*  var ajax = ajaxObject();
    ajax.open("GET", "http://www.timeapi.org/utc/now", false); 
    ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
    ajax.send(); 
    alert("1111111111");
    */
    $.get("http://www.timeapi.org/utc/now", function (result, status)
    {
        alert("Data: " + data + "\nStatus: " + status);
        var date = new Date(result[0]);
        console.log(result);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date1 = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        var time = year + "-" + month + "-" + date1 + " " + hour + ":" + minutes + ":" + second;
        console.log("time: " + time);
        $("#time").html(time);
    });
}
