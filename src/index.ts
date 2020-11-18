import * as PIXI from 'pixi.js';

export const app = new PIXI.Application({
	antialias: true,
	backgroundColor: 0x000000,
	resolution: devicePixelRatio,
});
