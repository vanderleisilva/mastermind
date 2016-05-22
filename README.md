# MastermindUI

Interactive user interface created for playing the famous Mastermind game.

## Structure
The project is based on angularJS and gulp. It uses [gulp-angular scaffold](https://github.com/Swiip/generator-gulp-angular) as its base. The system integrates with [Axiomzen API](http://careers.axiomzen.co/challenge) responsable for the game backend engine, and integrates also with [MastermindB](https://github.com/wrendeiro/mastermindB) project responsable for backend storage.  

## Steps to set up the projetct
1. Install bower dependencies: **bower install**
2. Install node dependencies: **npm install**
3. Clone [MastermindB](https://github.com/wrendeiro/mastermindB) project and configure it on your local machine.
4. Define **restUrlBackEnd** on **src/app/components/core/system.provider.js** with the adress of the backend project
4. Run on terminal **gulp build** (production purpose) or **gulp serve** (development purpose)
