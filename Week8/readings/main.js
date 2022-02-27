const btn_animation = document.getElementById('animation');

btn_animation.addEventListener('click', () => {
    animations = ["ease", "ease-in", "ease-out", "linear", "ease-in-out"]
    animations.forEach(element => {
        document.getElementById(element).classList.toggle('transition');
    });
})

const throw_ball = document.getElementById('throw');

throw_ball.addEventListener('click', () => {
    document.getElementById('play').classList.toggle('bounce');
})

/*-----------------------------Canvas----------------------------------*/

//square
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "orange";
context.fillStyle = "yellow";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

//square gradient
(function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}());

//circle
(function drawCircle() {
    const canvas = document.getElementById("demo4");
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "green";
    context.fillStyle = "purple";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}());

function saveDrawing() {
    const canvas5 = document.getElementById("demo4");
    window.open(canvas5.toDataURL("image/png"));
}

const c = document.getElementById("rec-fade-circ");
const ctx = c.getContext("2d");

// Create gradient

const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}