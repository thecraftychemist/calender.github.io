$(document).ready(function() {

/*<section class='calendar-row cf'><section class='container'><div class='lego-block " + key + "'><div class='lego-block__stud'>&nbsp;</div><div class='lego-block__stud'>&nbsp;</div><div class='lego-block__stud'>&nbsp;</div><div class='lego-block__stud'>&nbsp;</div></div></section><section class='container'><p class='project-title'>" + value +  "</p></section></section>*/

   var calendarData = {
    	"blue" : "girls Not Brides",
    	"red" : "open gov",
    	"yellow" : "example 2",
    	"gray" : "example 3",
    	"green" : "example 4"
   };
    $.each(calendarData, function(key, value){
	$(".color-list").append("<section class='calendar-row cf'><section class='container'><div class='brickContainer cf '><div class='brickTop " + key + "'></div><div class='brickLeft  " + key + "'></div><div class='brickRight " + key + "'></div><ul class='dotsTall'><li class='topLeft " + key + "'></li><li class='topRight " + key + "'></li><li class='bottomLeft " + key + "'></li><li class='bottomRight " + key + "'></li></ul><ul class='dots'><li class='topLeft " + key + "'></li><li class='topRight " + key + "'></li><li class='bottomLeft " + key + "'></li><li class='bottomRight " + key + "'></li></ul></div></section><section class='container'><p class='project-title'>" + value +  "</p></section></section>");
    });


});

