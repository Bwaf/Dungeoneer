const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); // 2D rendering context

// Fill background
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw a red square
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 50, 50);

// Draw text
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Hello Game!", 200, 200);