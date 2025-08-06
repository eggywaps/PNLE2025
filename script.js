const dailyMessages = [
  "You are enough, just as you are.",
  "Take it one step at a time.",
  "Good things take time — be patient.",
  "Your journey is unique. Honor it.",
  "You have the power to change your story.",
  "Breathe. You’ve got this.",
  "You are becoming the best version of yourself.",
  "Even slow progress is progress.",
  "Believe you can, and you're halfway there.",
  "You’re doing better than you think.",
  "Let today be the start of something new.",
  "You matter. Your story matters.",
  "Choose positivity today.",
  "You are full of potential.",
  "Kindness always comes back.",
  "Trust the timing of your life.",
  "Do something today your future self will thank you for.",
  "Be fearless in pursuit of what sets your soul on fire.",
  "Every day is a second chance.",
  "Growth begins outside your comfort zone."
];

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const dayOfYear = getDayOfYear();
const index = dayOfYear % dailyMessages.length;

document.getElementById("noteBox").textContent = dailyMessages[index];