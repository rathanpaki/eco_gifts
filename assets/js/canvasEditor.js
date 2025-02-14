window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let painting = false;
  let shape = "freehand";
  let color = "#333";
  let text = "Hello";

  function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function startPosition(e) {
    painting = true;
    if (shape !== "freehand") {
      drawShape(e);
    } else {
      draw(e);
    }
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting || shape !== "freehand") return;
    const pos = getMousePos(canvas, e);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function drawShape(e) {
    const pos = getMousePos(canvas, e);
    ctx.fillStyle = color;

    if (shape === "rectangle") {
      ctx.fillRect(pos.x - 25, pos.y - 25, 50, 50);
    } else if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
      ctx.fill();
    } else if (shape === "text") {
      ctx.font = "20px Arial";
      ctx.fillText(text, pos.x, pos.y);
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function setShape(newShape) {
    shape = newShape;
  }

  function setColor(newColor) {
    color = newColor;
  }

  function setText(newText) {
    text = newText;
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);

  window.clearCanvas = clearCanvas;
  window.setShape = setShape;
  window.setColor = setColor;
  window.setText = setText;
};
