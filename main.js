var sqX = 4;
var sqY = 5;
var mode = true;
var am = false;
var lastMs = 0;
function setup(){
    createCanvas(1891,936);
    locations = {y:900,dy:sqY+1,x:15,dx:sqX+1,ddx:31,ddy:72}
    iDraw();
    frameRate(1000);
    Mousetrap.bind('1', function() { modeC(true); });
    Mousetrap.bind('2', function() { modeC(false); });
}
function modeC(ampm){
    if(ampm){
        mode = true;
        sqY = 5;
        locations = {y:900,dy:sqY+1,x:15,dx:sqX+1,ddx:31,ddy:72}
    }
    else{
        mode = false;
        sqY = 3;
        locations = {y:900,dy:sqY,x:15,dx:sqX+1,ddx:31,ddy:36}
    }
    iDraw();
}
function iDraw(){
    console.log("IDRAW");
    background(255);
    noStroke();
    let hr = hour();
    if(mode){
        if(hr>11){
            am=false
        }else{
            am=true;
        }
        hr = hr%12;
    }
    else{
        am=false;
    }
    let dy = day();
    for(var h = 0;h<=hr;h++){
        if(h!=hr){
            mn=59;
        } else{
            mn = minute();
        }
        for(var j = 0; j<=mn;j++){
            if(j != mn) {
                sc = 60;
            }else if (mn!=60){
                sc=second();
            }
            for(var i = 0;i<sc;i++){
                if(am || !mode){
                    fill(255*h/24,255*j/60,255*dy/31);
                }else{
                    fill(255*(11-h)/24,255*(59-j)/60,255*dy/31);
                }
                rect(locations.x+locations.dx*(floor(i/10))+locations.ddx*j,locations.y-locations.dy*(i%10)-locations.ddy*h,sqX,sqY);
            }
        }
    }
    lastS = second();
}
function draw(){
    let dy = day();
    let hur = hour();
    let min = minute();
    let sec = second();
    if(mode){
        if(hur>11){
            am2=false
        }else{
            am2=true;
        }
        hur = hur%12;
    }else{
        am2=false;
    }
    if(am2!=am || millis() > lastMs+1000){
        iDraw();
    }
    lastMs=millis();
    if(am || !mode){
        fill(255*hur/24,255*min/60,255*dy/31);
    }else{
        fill(255*(11-hur)/24,255*(59-min)/60,255*dy/31);
    }
    rect(locations.x+locations.dx*(floor(sec/10))+locations.ddx*(min),locations.y-locations.dy*(sec%10)-locations.ddy*hur,sqX,sqY);
}
