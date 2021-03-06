import 'babel-polyfill';
import Ball from './ball';
import Paddle from './paddle';
import Physics from './physics';
import Layout from './layout';

/**
 * @description
 * This will wait for the page to be fully loaded before initializing the canvas and game elements
 * The the setInterval will draw the game frame by frame
 *
 */
document.addEventListener("DOMContentLoaded",() => {
	let canvas = document.getElementById('game');
	let ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	canvas.style.backgroundColor = 'rgba(0, 0, 0, 1)';

	let layout = new Layout(canvas, ctx);
	let paddle = new Paddle(canvas, ctx);
	let ball = new Ball(canvas, ctx);
	let physics = new Physics(canvas, ctx, paddle, ball, layout);

	function draw () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		physics.draw();
		requestAnimationFrame(draw);
	}

	draw();
});
