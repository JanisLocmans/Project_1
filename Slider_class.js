// Constructor
function Slider(element) {
	 //private variables
	 
	 //global variables
	this.element = element;
    this.el_width = this.element.offsetWidth * 3;
    this.el_height = this.element.offsetHeight;


     this.start();
}

// Methods
Slider.prototype.start = function() {
} 

Slider.prototype.create = function() {

   	this.div = document.createElement('div');
   	this.div.setAttribute("class", "js_slider_mask");
   	this.div.setAttribute("id", "js_slider_id");

   	this.element.appendChild(this.div);

   	this.div.style.height = this.el_height;
   	this.div.style.width = this.el_width;
}

