// Constructor
function Slider(element, pics) {
	 //private variables
	 //global variables
	  this.element = element;
    this.el_width = this.element.offsetWidth;
    this.el_height = this.element.offsetHeight;
    this.startlocation = 0; // Margin starts at 0. Movement = ( startlocation - x ).
    this.pic_handler = 1;
    this.count = pics.length;
    this.create();     
}

// Methods
Slider.prototype.create = function() {
   	this.div = document.createElement('div');
   	this.div.setAttribute("class", "js_slider_mask");
   	this.div.setAttribute("id", "js_slider_id");
   	this.element.appendChild(this.div);
   	this.div.style.height = this.el_height;
   	this.div.style.width = this.el_width * this.count;

    for (var x = 0; x < this.count; x++) {
      this.img_holder = document.createElement( 'div' );
      this.img_holder.className = "js_img_holder";
      document.getElementById("js_slider_id").appendChild(this.img_holder);
      this.img_holder.style.backgroundImage = 'url(' + pics[x] + ')';
      this.img_holder.style.height = this.el_height;
      this.img_holder.style.width = this.el_width;
    } 
   this.start();
}

Slider.prototype.start = function() {
  this.check();
}

Slider.prototype.check = function() {
  var self = this; 
  if (this.pic_handler === this.count) { 
    this.pic_handler = 1;
     $(this.div).animate(  {  marginLeft: "+=" + this.el_width * (this.count - 1) }, 100, "swing", 
       function() {
                  this.d = setTimeout(function(){                         
                  self.push();  
                  }, 2000);
                });
  }else{
    this.push();
  }
} 

Slider.prototype.push = function () {
  var self = this;  					
 	  			$(this.div).animate(  {  marginLeft: "-=" + this.el_width }, 500, "swing", 
            function() {
                        this.d = setTimeout(function(){                         
                        self.pic_handler++;
                        self.start(); 
                      }, 2000);
                    });
}

Slider.prototype.stop = function() {
	clearInterval(this.d);
}

// http://youmightnotneedjquery.com/