var canvas;

function setup(){
    canvas = createCanvas(500,500);
}

function draw(){
    background(2500);
    var h=hour();
    var m=minute();
    var s=second();
    h=h%12;
    strokeWeight(8);
    stroke(199,103,99);
    noFill();
    var ha=map(h,0,12,0,360);
    arc(250, 250, 380, 380, 0-HALF_PI, ha-HALF_PI);



    stroke(103,153,150);
    var ma=map(m,0,60,0,360);
    arc(250, 250, 400, 400, 0+3*HALF_PI, m);
    console.log(m,ma);

    stroke(153,103,199);
    var sa=map(s,0,60,0,360);
    arc(250, 250, 420, 420, 0-HALF_PI, sa-HALF_PI);

}
