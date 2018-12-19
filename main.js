var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var usingPainting = false;
lastPoint = {x:undefined,y:undefined};

xxx();
window.onresize = function(){
  xxx();
};
function xxx(){
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;
  
  canvas.width = pageWidth;
  canvas.height = pageHeight;
}

// ctx.fillStyle = "black";
// ctx.fillRect(10,10,100,100);

//drawCircle(150,150,10);


canvas.onmousedown = function(e){
  var x = e.clientX;
  var y = e.clientY;
  if(usingEraser){
    usingPainting = true;
    ctx.clearRect(x-5,y-5,10,10);
  }else{
    usingPainting = true;
    lastPoint = {x:x,y:y};
    drawCircle(x,y,1);
  }
};
canvas.onmousemove = function(e){
  
  var x = e.clientX;
  var y = e.clientY;
  
  if(usingEraser){
    
    if(usingPainting){
      usingPainting = true;
      ctx.clearRect(x-5,y-5,10,10);
    }
    
  }else{
    
      if(usingPainting){

      var newPoint = {x:x,y:y};
      drawCircle(x,y,1);
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
      lastPoint = newPoint;
    }else{

    }
  }
  
};
canvas.onmouseup = function(e){
  usingPainting = false;
  usingEraser = false;
};

function drawCircle(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fill();
}
function drawLine (x1,y1,x2,y2){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
}

var usingEraser = false;
eraser.onclick = function() {
  usingEraser =true;
  actions.className = 'actions x';

};
brush.onclick = function(){
  usingEraser = false;
  actions.className = 'actions';
};