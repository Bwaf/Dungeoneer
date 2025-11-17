const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); // 2D rendering context


function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Example: draw moving square
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);

    // Update position
    x += 2;
    y += 1;

    requestAnimationFrame(gameLoop); // keeps looping
}

let x = 50, y = 50;
gameLoop();