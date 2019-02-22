first_click = 0; // for check the first click
$(document).ready(function(e) {
  $(".characters").click(function(){
	   if(!first_click)
	   {
		   	first_click = 1 ;
	  		Player.id	=	parseInt($(this).attr("id"));
	   		for(var i=0;i<=4;i++){ // remove all characters except the choice one
		  		 if(i!=Player.id)
		   			$("#"+i).hide(2e3);
	   		}
	   }
 })
 $("#newGame").click(function(){
	   $("#Start").hide(); 
	   $("#theGame").show(); 
 })
 $(".again").click(function(){
	 $("#lose").hide(1e3);
	 $("#win").hide(1e3,function(){
		 $("#theGame").slideDown(2e3);
		 for(var i=1;i<=3;i++)  // show 3 hearts	
		 	$("#h"+i).show(); 
	 });
 })
});
