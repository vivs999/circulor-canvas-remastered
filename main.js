var mouseEvent="";
var X_last_position, Y_last_position;
canvas=document.getElementById("myCanvas");
ctx=myCanvas.getContext("2d");
color="black";
width=3;
radius_set=25;
canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown(e){
    color=document.getElementById("color_input").value;
    width=document.getElementById("lineWidth").value;
    radius_set=document.getElementById("circleRadius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e){
    X_current_position=e.clientX-canvas.offsetLeft;
    Y_current_position=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        ctx.arc(X_current_position,Y_current_position, radius_set, 0, 2*Math.PI);
        
        console.log("Current position of X and Y = ");
        console.log("X = "+X_current_position+" Y = "+Y_current_position);

        
        ctx.stroke();
    }
    X_last_position=X_current_position;
    Y_last_position=Y_current_position;
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent="mouseleave";
}

function clearCanvas(){
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
}