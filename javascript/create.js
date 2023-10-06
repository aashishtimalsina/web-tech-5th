class circle{
    constructor(r){
     this.r = r;  
    }
    area_circle(){
        let c = Math.PI*this.r*this.r;
        return c;
    }
    
}


class rectangle{
    constructor(l,b){
        this.l = l;
        this.b = b;
    }
    rectangle_area(){
       let r =  this.l * this.b;
       return r;
    }
}

class triangle{
    constructor(b,h){
        this.b = b;
        this.h = h;
    }
    area_triangle(){
        let t = 1/2*this.b * this.h;
        return t;
    }
}

const circle1 = new circle(5);
// console.log(circle1.area_circle());


const rectangle1 = new rectangle(5,5);
// console.log(rectangle1.rectangle_area());

const triangle1 = new triangle(5,5);
// console.log(triangle1.area_triangle());

let check  = rectangle1

if(check instanceof triangle){
    console.log("Triangle =",triangle1.area_triangle());
}else if(check instanceof rectangle){
    console.log("Rectangle =",rectangle1.rectangle_area());
}else{
    console.log("Circle =",circle1.area_circle());
}

