// Constructor
function Slider(element) {
	 //private variables
	 
	 //global variables
	this.element = element;
      this.start();
}

// Methods
Slider.prototype.start = function() {
	alert("Has started");
} 

Slider.prototype.create = function() {

   	this.div = document.createElement('div');
   	this.div.setAttribute("class", "js_slider_mask");

   	this.element.appendChild(this.div);

}
