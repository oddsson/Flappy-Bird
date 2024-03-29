# HTML5 CSS-based Game

This game project has the following:

* 500x600 pixel game canvas.
* All positions and sizes defined using a 10px em. This means that the game could be scaled up and down by changing the base font-size. This is one way to make the graphics responsive.
* A simple game loop which calculates delta and can be started and stopped.
* A player entity which can be moved around the canvas using the spacebar key.
* A "Game Over" screen when player is moved outside bounds, where the game can be restarted.
* Randomly generated pipes to jump through.
* An awesome song with controls.
* Everything is hardware accelerated.
* Collision with the pipes
* ~~Point counter~~

## Setup

```
$ npm install
$ bower install
$ grunt server
```
