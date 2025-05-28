// utils/confetti.js
import confetti from "canvas-confetti";
import { Howl } from "howler";

// Preload and configure sound using Howler at max volume
const hooraySound = new Howl({
  src: ["/sounds/Hooray_Pop-.mp3"],
  volume: 1.0, // Max volume
  preload: true,
});

export const triggerConfetti = () => {
  // Trigger confetti animation
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Play sound at full volume
  hooraySound.play();
};