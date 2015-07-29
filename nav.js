var get_screen_size = screen.height;


window.onload = function () {
    //change_class_style('home', 1, 2, 'height', get_screen_size);
    change_class_style('select_box', 1, 2, 'background', 'yellow', function(){ alert("aroo")});
}



function change_class_style(_class, _first, _last, _attr, _value, callback) {
	
    var cols  = document.getElementsByClassName(_class);
    var first = _first - 1;
    var last;

    	if( _last == 'length' )

    		{ 
    			last = cols.length; 
    		} 
    		else 
    		{
    			last = _last - 1;
    		}

    for(i = 1; first < last; first++) {
     cols[first].style[_attr] = _value;

    }
} 

function push(page_id) {

	var current_page = page_id.parentNode.parentNode.getAttribute('id');	
	var doc =  document.getElementById(current_page);
	var height = doc.offsetHeight;
	var	check_size = 0;

	doc.style.height = height;

	var d = setInterval(function () { 

	    height = height - 5;	
	    doc.style.height = height;
	    if (height < (get_screen_size * 0.047) && check_size != 1)
	    	{
	    		//console.log(document.getElementById(page_id).id);
	    		check_size = 1;
	   		}
	  	}, 10);
}
