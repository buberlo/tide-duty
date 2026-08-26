import './styles.css';

import { createInput } from './game/input';
import { createGameState } from './game/state';
import { startLoop } from './game/loop';

const canvas = (document.getElementById('game') ?? document.querySelector('canvas')) as
  | HTMLCanvasElement
  | null;
const context = canvas?.getContext('2d');

if (!canvas || !context) {
  document.body.textContent = 'Tide Duty requires a 2D canvas context.';
  throw new Error('Canvas 2D context not available');
}

const input = createInput();
const state = createGameState();

const resizeCanvas = () => {
  const rect = canvas.getBoundingClientRect();
  const width = rect.width || window.innerWidth;
  const height = rect.height || window.innerHeight;

  canvas.width = Math.max(1, Math.floor(width));
  canvas.height = Math.max(1, Math.floor(height));
};

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);
resizeCanvas();

startLoop(canvas, context, state, input);