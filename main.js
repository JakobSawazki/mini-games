const canvas = document.querySelector("#heroCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const shuffleButton = document.querySelector("#shuffleButton");
const tiltCards = Array.from(document.querySelectorAll("[data-tilt]"));
const ideaForms = Array.from(document.querySelectorAll("[data-idea-form]"));

const games = [
  "https://jakobsawazki.github.io/volt-runner/",
  "https://jakobsawazki.github.io/puzzle-lab/"
];

const palette = ["#42e8d4", "#8dff62", "#f5c84b", "#ff6d65", "#9f8cff", "#5da9ff"];
const sprites = Array.from({ length: 42 }, (_, index) => ({
  x: Math.random(),
  y: Math.random(),
  size: 10 + Math.random() * 34,
  speed: 0.015 + Math.random() * 0.045,
  color: palette[index % palette.length],
  type: index % 4,
  phase: Math.random() * Math.PI * 2
}));

let pointerX = 0.5;
let pointerY = 0.5;
let pixelRatio = 1;

function resizeCanvas() {
  if (!canvas || !ctx) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
  canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function drawSprite(sprite, width, height, now) {
  if (!ctx) {
    return;
  }

  const drift = now * sprite.speed * 0.001;
  const px = ((sprite.x + drift) % 1) * width;
  const py = ((sprite.y + Math.sin(drift + sprite.phase) * 0.035 + 1) % 1) * height;
  const parallaxX = (pointerX - 0.5) * sprite.size * 1.4;
  const parallaxY = (pointerY - 0.5) * sprite.size * 1.4;
  const x = px + parallaxX;
  const y = py + parallaxY;
  const size = sprite.size;

  ctx.save();
  ctx.globalAlpha = 0.58;
  ctx.strokeStyle = sprite.color;
  ctx.fillStyle = sprite.color;
  ctx.shadowBlur = 18;
  ctx.shadowColor = sprite.color;
  ctx.lineWidth = Math.max(2, size * 0.08);

  if (sprite.type === 0) {
    ctx.strokeRect(x, y, size, size);
  } else if (sprite.type === 1) {
    ctx.beginPath();
    ctx.moveTo(x + size * 0.5, y);
    ctx.lineTo(x + size, y + size * 0.8);
    ctx.lineTo(x, y + size * 0.8);
    ctx.closePath();
    ctx.stroke();
  } else if (sprite.type === 2) {
    ctx.beginPath();
    ctx.arc(x + size * 0.5, y + size * 0.5, size * 0.45, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.5);
    ctx.lineTo(x + size, y + size * 0.5);
    ctx.moveTo(x + size * 0.5, y);
    ctx.lineTo(x + size * 0.5, y + size);
    ctx.stroke();
  }

  ctx.restore();
}

function drawGrid(width, height, now) {
  if (!ctx) {
    return;
  }

  const spacing = 54;
  const offset = (now * 0.018) % spacing;
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(195, 227, 234, 0.09)";

  for (let x = -spacing; x < width + spacing; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x + offset, 0);
    ctx.lineTo(x + offset, height);
    ctx.stroke();
  }

  for (let y = -spacing; y < height + spacing; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y + offset);
    ctx.lineTo(width, y + offset);
    ctx.stroke();
  }
  ctx.restore();
}

function drawScanline(width, height, now) {
  if (!ctx) {
    return;
  }

  const y = (now * 0.08) % height;
  ctx.save();
  ctx.globalAlpha = 0.34;
  ctx.fillStyle = "#42e8d4";
  ctx.fillRect(0, y, width, 2);
  ctx.restore();
}

function frame(now) {
  if (!canvas || !ctx) {
    return;
  }

  const width = canvas.width / pixelRatio;
  const height = canvas.height / pixelRatio;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#070a12";
  ctx.fillRect(0, 0, width, height);
  drawGrid(width, height, now);
  sprites.forEach((sprite) => drawSprite(sprite, width, height, now));
  drawScanline(width, height, now);
  requestAnimationFrame(frame);
}

function launchRandomGame() {
  const index = Math.floor(Math.random() * games.length);
  window.location.href = games[index];
}

function tiltCard(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-2px)`;
}

function resetTilt(event) {
  event.currentTarget.style.transform = "";
}

function setFormStatus(form, message, state) {
  const status = form.querySelector("[data-form-status]");
  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.remove("is-success", "is-error");
  if (state) {
    status.classList.add(`is-${state}`);
  }
}

async function submitIdea(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector("button[type='submit']");
  const emailField = form.querySelector("input[type='email']");
  const formData = new FormData(form);

  if (emailField && emailField.value) {
    formData.set("_replyto", emailField.value);
  }

  if (formData.get("_honey")) {
    setFormStatus(form, "Danke, deine Idee wurde übernommen.", "success");
    form.reset();
    return;
  }

  setFormStatus(form, "Idee wird gesendet ...");
  if (submitButton) {
    submitButton.disabled = true;
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Form submit failed with ${response.status}`);
    }

    form.reset();
    setFormStatus(form, "Danke, deine Idee ist angekommen.", "success");
  } catch (error) {
    setFormStatus(form, "Das hat gerade nicht geklappt. Bitte versuche es gleich noch einmal.", "error");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
}

if (canvas && ctx) {
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX / Math.max(1, window.innerWidth);
    pointerY = event.clientY / Math.max(1, window.innerHeight);
  });

  resizeCanvas();
  requestAnimationFrame(frame);
}

if (shuffleButton) {
  shuffleButton.addEventListener("click", launchRandomGame);
}

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", tiltCard);
  card.addEventListener("pointerleave", resetTilt);
});

ideaForms.forEach((form) => {
  form.addEventListener("submit", submitIdea);
});
