
//use an event listener method to start a function
$("#enter").on("click",function(){

var apiKey="";
var dat = "?date=" + $("#flickday").val();
  var apiUrl="https://api.nasa.gov/planetary/apod"+ dat + apiKey;

  $.ajax({
      url: apiUrl,
      //response operation
      success:function(r){
        var link = r.hdurl;
        console.log(link);
        $("img").attr("src",link);
      }
    });
});
