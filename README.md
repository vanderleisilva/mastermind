# MastermindUI

The mastermindUI project is based on a famous game called "Mastermind" where players are required to find out an 8 colour password, which can be consisted of different or equal colours, by having at most 10 attempts either a time limit of 5 minutes. Whenever a colour exists and is selected in the right position, a black colour ball at the square on the right hand side of the current attempt is shown, though when only the colour is right, a white colour ball comes up.

## Structure
The project is based on angularJS and gulp. It uses [gulp-angular scaffold](https://github.com/Swiip/generator-gulp-angular) as its base. The system integrates with [Axiomzen API](http://careers.axiomzen.co/challenge) responsable for the game backend engine, and integrates also with [MastermindB](https://github.com/wrendeiro/mastermindB) project responsable for backend storage.  

## Steps to set up the projetct
1. Install bower dependencies: **bower install**
2. Install node dependencies: **npm install**
3. Clone [MastermindB](https://github.com/wrendeiro/mastermindB) project and configure it on your local machine.
4. Run on terminal **gulp build** (production purpose) or **gulp serve** (development purpose)
