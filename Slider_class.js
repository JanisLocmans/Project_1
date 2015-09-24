// Constructor
function Slider(element, pics) {
	 //private variables
	 
	 //global variables
	  this.element = element;
    this.el_width = this.element.offsetWidth;
    this.el_height = this.element.offsetHeight;
    this.startlocation = 0; // Margin starts at 0. Movement = ( startlocation - x ).
    this.count = pics.length;
    this.create();   
    
}

// Methods
Slider.prototype.start = function() {
  this.push();  
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


    this.start();


}

Slider.prototype.push = function () {
  var self = this;  					
	  			$(this.div).animate(  {  marginLeft: "-=" + this.el_width }, 1000, "linear", 
            function() {

                       this.d = setTimeout(function(){ self.start(); }, 3000);
                       });
}

Slider.prototype.stop = function() {
	clearInterval(this.d);
}

// http://youmightnotneedjquery.com/