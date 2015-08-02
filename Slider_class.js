// Constructor
function Slider(element, pics) {
	 //private variables
	 
	 //global variables
	  this.element = element;
    this.el_width = this.element.offsetWidth;
    this.el_height = this.element.offsetHeight;
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
  this.div.style.marginLeft -=  this.el_width;
}

// http://youmightnotneedjquery.com/