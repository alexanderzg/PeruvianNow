/**
* script that handles the active nav hover
**/

var tempFlag = 1;
var target;
var path;


//Detects current main page and set its nav background hover 
//color to active state
jQuery(document).ready(function($){
	path = window.location.pathname.split("/").pop();
	if(path ==''){
		path = 'index.html';
	}
	 // document.write("Path: " + path);
	target =$('nav a[href="'+path+'"]');
	// document.write("Target: " + target);
	// if(tempFlag==1){
	 	target.addClass('active');
	// }else{
	 	//target.removeClass('active');
	// }
});

// $(document).ready(function(e){
// 	$('.headerNav a').click(function(){
// 		target.addClass('active');
// 	});
// });

// $(document).ready(function(e){
// 	$(".headerNav a").hover(function(){
// 		var path2 = (this).attr('id');
// 		document.write("Path2: " + path2);
// 		// if(path==path2){
// 		target.removeClass('active');
// 		// }
// 	},function(){
// 		target.addClass('active');
// 	});
// });