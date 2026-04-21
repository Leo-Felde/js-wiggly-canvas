let isWiggly = true;
let strokes = [];
let currentPoints = [];
let isDrawing = false;
let animationId = null;

// limits max undos, -1 for unlimited
let maxUndos = 5;
let currentUndos = 0;

const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
const WIGGLENESS = 1.4; // wiggleniliness coeficient more equals more wiggly!
ctx.lineWidth = 5;
ctx.lineCap = "square";
ctx.lineJoin = "round";

const wiggleButton = document.getElementById("wiggle-btn");
const undoButton = document.getElementById("undo-btn");

// toggles wigglyniliness
wiggleButton.addEventListener("click", (e) => {
  isWiggly = !isWiggly;
});

// Undo last action
undoButton.addEventListener("click", (e) => {
  if (currentUndos > 0) {
    strokes.pop();
  }
});

// mouse drawing events
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  currentPoints = [{ x: e.offsetX, y: e.offsetY }];
  startAnimation();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  currentPoints.push({ x: e.offsetX, y: e.offsetY });
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;

  if (currentPoints.length >= 1) {
    strokes.push([...currentPoints]);
    if (currentUndos < (maxUndos > 0 ? maxUndos : currentUndos + 1)) {
      currentUndos++;
    }
  }
  currentPoints = [];
});

function startAnimation() {
  if (animationId) return;

  function animate() {
    drawAllStrokes();
    animationId = requestAnimationFrame(animate);
  }
  animate();
}

function drawAllStrokes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  strokes.forEach((stroke) => {
    drawStroke(stroke);
  });

  if (currentPoints.length >= 1) {
    drawStroke(currentPoints);
  }
}

function drawStroke(points) {
  if (points.length === 0) return;

  ctx.save();

  if (points.length === 1) {
    ctx.beginPath();
    if (isWiggly) {
      const wiggleX = (Math.random() - 0.5) * WIGGLENESS;
      const wiggleY = (Math.random() - 0.5) * WIGGLENESS;
      ctx.arc(
        points[0].x + wiggleX,
        points[0].y + wiggleY,
        ctx.lineWidth / 2,
        0,
        Math.PI * 2,
      );
    } else {
      ctx.arc(points[0].x, points[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
    }
    ctx.fill();
  } else {
    ctx.beginPath();

    if (isWiggly) {
      ctx.moveTo(
        points[0].x + (Math.random() - 0.5) * WIGGLENESS,
        points[0].y + (Math.random() - 0.5) * WIGGLENESS,
      );

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(
          points[i].x + (Math.random() - 0.5) * WIGGLENESS,
          points[i].y + (Math.random() - 0.5) * WIGGLENESS,
        );
      }
    } else {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
    }

    ctx.stroke();
  }

  ctx.restore();
}

document.getElementById("wiggle-toggle").addEventListener("click", () => {
  isWiggly = !isWiggly;
});

document.getElementById("clear-btn").addEventListener("click", () => {
  strokes = [];
  currentPoints = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

startAnimation();
