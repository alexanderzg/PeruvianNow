/**
* This script handles the functions used in "restaurant.html"
**/


//Handles the harmony in the restaurant toggle sub categories 
$(document).ready(function(e){
	var flag = 2;
	var flag2 = 2;
	$('.hasSub').click(function(e){
		if(flag == 2){

			// if(flag2 == 2){
				$('.countySub').slideUp(1000);
				$(this).children().slideDown(1000);
				flag2 = 1;
			// }else{
			// 	flag2 = 2;
			// 	$('.countySub').slideUp(1000);
			// };
		  };
		  //prevents routing to page top
		  return false;
	});

	//DEPRECATED
	// $('.hasSub').click(function(e){
	// 	if(flag == 2){
	// 		$('.countySub').slideUp(1000);
	// 	};
	// });

	// $('.hasSub').dblclick(function(e){
	// 	if(flag == 2){
	// 		$('.countySub').slideUp(1000);
	// 		$(this).children().slideDown(1000);
	// 	};
	// });

	$('.countySub').click(function(){
		flag=1;
	});

	$('.countySub').mouseleave(function(){
		flag=2;
		// $('.countySub').slideUp(1000);
	});

});

var tempFlag = 1;

//Detects restaurant nav sub-menu for change of background active
$(document).ready(function(e){
	$('.navMenu ul li a').click(function(e){
		$('.navMenu ul li a').removeClass('active');
		$(this).addClass('active');
		tempFlag = 2;
	});
});

//Handles the drop down menu options that uses the "databaseAccess.php" script
function showUser(str) {

    if (str == "") {
          document.getElementById("txtHint").innerHTML = "";
          return;
    } else { 
          if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttp.onreadystatechange = function() {
         
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                  document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
              }
          };

        //Accesses the "databaseAccess.php" script  
        xmlhttp.open("GET","restaurantsDBAccess.php?q="+str,true);
        
        xmlhttp.send();
    }
}

	