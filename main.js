var sqX = 4;
var sqY = 3;
function setup(){
    createCanvas(1891,936);
    locations = {y:900,dy:sqY,x:15,dx:sqX+1,ddx:31,ddy:36}
    iDraw();
    frameRate(1000);
}
function iDraw(){
    background(255);
    noStroke();
    let hr = hour();
    let dy = day();
    for(var h = 0;h<=hr;h++){
        if(h!=hr){
            mn=60;
        } else{
            mn = minute();
        }
        for(var j = 0; j<mn;j++){
            if(j != mn-1) {
                sc = 60;
            }else if (mn!=60){
                sc=second();
            }
            for(var i = 0;i<sc;i++){
                fill(255*h/24,255*j/60,255*dy/31);
                rect(locations.x+locations.dx*(floor(i/10))+locations.ddx*j,locations.y-locations.dy*(i%10)-locations.ddy*h,sqX,sqY);
            }
        }
    }
}
function draw(){
    let dy = day();
    let hur = hour();
    let min = minute()-1;
    let sec = second();
    fill(255*hur/24,255*min/60,255*dy/31);
    rect(locations.x+locations.dx*(floor(sec/10))+locations.ddx*min,locations.y-locations.dy*(sec%10)-locations.ddy*hur,sqX,sqY);
}
