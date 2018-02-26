var canvas;
var thickness=20;
function setup(){
    canvas = createCanvas(500,500);
}

function draw(){
    background(230);
    var h=hour()%12;
    var m=minute();
    var s=second();

    strokeWeight(thickness);
    stroke(199,103,99);
    noFill();
    var ha=map(h,0,12,0,TWO_PI);
    if(ha==0){ha=HALF_PI/360;}
    arc(width/2, height/2, width/2+thickness*2-thickness*2, width/2+thickness*2-thickness*2,  0-HALF_PI, ha-HALF_PI);

    stroke(103,153,150);
    var ma=map(m,0,60,0,TWO_PI);
    if(ma==0){ma=HALF_PI/360;}
    arc(width/2, height/2, width/2+thickness*2, width/2+thickness*2, 0-HALF_PI, ma-HALF_PI);

    stroke(153,103,199);
    var sa=map(s,0,60,0,TWO_PI);
    if(sa==0){sa=HALF_PI/360;}
    arc(width/2, height/2, width/2+thickness*2+thickness*2, width/2+thickness*2+thickness*2, 0-HALF_PI, sa-HALF_PI);


}
