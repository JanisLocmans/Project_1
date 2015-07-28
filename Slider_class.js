// Constructor
function Slider() {
	 //private variables

	 //global variables


      alert("Hai World");
      this.start();
}

Slider.prototype.start = function() {
	alert("function started");
	this.r;
	this.r = 5;
	alert(this.r);

}
