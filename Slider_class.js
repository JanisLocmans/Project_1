// Constructor
function Slider() {
	 //private variables

	 //global variables
	
      this.start();
}

// Methods
Slider.prototype.start = function() {
	alert("Has started");
} 

Slider.prototype.create = function(element) {

   	this.div = document.createElement('div');
   	this.div.setAttribute("class", "democlass");
   	element.appendChild(this.div);

}


