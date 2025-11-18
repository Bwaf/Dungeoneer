const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); // 2D rendering context

let x = 50, y = 50;
const speed = 5; // movement speed in pixels per frame
const keys = {}; // object to track pressed keys

// Listen for key presses
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fill background gray (optional)
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Movement
    if (keys["w"]) y -= speed;
    if (keys["d"]) y += speed;
    if (keys["s"]) x -= speed;
    if (keys["a"]) x += speed;

    // Draw red square
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 50, 50);

    requestAnimationFrame(gameLoop);
}

gameLoop();
