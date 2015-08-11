// Constructor
function Slider(element, pics) {
	 //private variables
	 
	 //global variables
	  this.element = element;
    this.el_width = this.element.offsetWidth;
    this.el_height = this.element.offsetHeight;
    this.startlocation = 0; // Margin starts at 0. Movement = ( startlocation - x ).
    this.count = pics.length;
    
    this.start();
    
}

// Methods
Slider.prototype.start = function() {
  this.create();


} 

Slider.prototype.create = function() {

   	this.div = document.createElement('div');
   	this.div.setAttribute("class", "js_slider_mask");
   	this.div.setAttribute("id", "js_slider_id");
   	this.element.appendChild(this.div);
   	this.div.style.height = this.el_height;
   	this.div.style.width = this.el_width * this.count;

    for (var x = 0; x < this.count; x++)
    {
      this.img = new Image();
      this.img.src = pics[x];
           document.getElementById("js_slider_id").appendChild(this.img);

           this.img.style.height = this.el_height;
           this.img.style.width = this.el_width;
    }
}

Slider.prototype.push = function () {  
	var self = this;
	var x1 = this.el_width * 10 / 100;
	var x2 = this.el_width * 80 / 100;
	var y1 = 1;
	var y2 = 0;
	console.log(self.el_width);
  	this.d = setInterval(function() {

  		if (  self.startlocation > -Math.abs((self.el_width * (self.count - 1))))
  			{	
  				y2 += y1;
  					if ( y2 < x1 ) 
  					{
						y1 = 1;
  					}
  					else if (y2 < x2 && y2 > x1)
  					{
 						y1 = 17;
  					} 
  					else if (y2 > x2 )
  					{	
  							y1 = 1;
  					}
  				
  				
  				if ( y2 == self.el_width)
  					{	
  						y2 = 0;
  					}
	  			self.startlocation -= y1;
	  			self.div.style.marginLeft = self.startlocation;
	  			//console.log(self.startlocation);
  			}
  		else
  			{
  				self.stop();
  			}
  		
  	}, 10);
	 	
}

Slider.prototype.stop = function() {
	clearInterval(this.d);
}

// http://youmightnotneedjquery.com/