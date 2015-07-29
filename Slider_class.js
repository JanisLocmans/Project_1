// Constructor
function Slider() {
	 //private variables

	 //global variables
	 this.a = ["Saab", "Volvo", "BMW"];
	
      alert("Hai World");
      this.start();
}
// Methods
Slider.prototype.start = function() {
	this.div = document.createElement('DIV');
   	this.div.setAttribute("class", "democlass");
   	document.body.appendChild(this.div);
   //	for (x = 0; x < 3; x++)
   //	{
   // 		alert(this.a[x]);
   //	}
} 
Slider.prototype.create = function() {

}


