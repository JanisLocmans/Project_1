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
  	this.d = setInterval(function() {
		//self.startlocation  != 
  		if (  self.startlocation > -Math.abs((self.el_width * self.count)) )
  			{	
	  			self.startlocation -= 15;
	  			self.div.style.marginLeft = self.startlocation;
	  			console.log(self.startlocation);
  			}
  		else
  			{
  				console.log("WE stopped");
  				self.stop();
  			}
  		
  	}, 100);
	 	
}

Slider.prototype.stop = function() {
	clearInterval(this.d);
}

// http://youmightnotneedjquery.com/