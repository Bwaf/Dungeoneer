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

function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Example: draw moving square
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 50, 50);

    // Update position
    x += 2;
    y += 1;

    requestAnimationFrame(gameLoop); // keeps looping
}

let x = 50, y = 50;
gameLoop();