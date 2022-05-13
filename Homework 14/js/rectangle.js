class Rectangle{

	//maybe I wasn't creative but there's only so many shapes!! ;)
  
    //constructor
    // x/y coords, w/h size, rgb color
    constructor(x,y,w,h,r,g,b)
  {
      this.x = x;
      this.y = y; 
      this.w = w;
      this.h = h;
      this.r = r;
      this.b = b;
      this.g = g;
  }
  
  display()
  {  fill(this.r, this.g, this.b);
      rect(this.x, this.y, this.w, this.h);
  }
}