﻿
/// <reference path="../objects/buildings1.ts" />
/// <reference path="../objects/buildings2.ts" />
/// <reference path="../objects/buildings3.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/cloud1.ts" />
/// <reference path="../objects/cloud2.ts" />
/// <reference path="../objects/cloud3.ts" />
/// <reference path="../objects/cloud4.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/kryptonite.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/laser.ts" />
/// <reference path="../objects/lex.ts" />
/// <reference path="../objects/missile.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/person1.ts" />
/// <reference path="../objects/person2.ts" />
/// <reference path="../objects/person3.ts" />
/// <reference path="../objects/person4.ts" />
/// <reference path="../objects/person5.ts" />
/// <reference path="../objects/points.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sunmoon.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/superman_hori.ts" />
/// <reference path="../objects/superman_free.ts" />

/// <reference path="../constants.ts" />
/// <reference path="../game.ts" />

module states {
    // MENU STATE CLASS
    export class Menu_level3 {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public mailPilotLabel: objects.Label;
        public mailPilotLabel1: objects.Label;
        public mailPilotLabel3: objects.Label;
        public mailPilotLabel2: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Game Over Label
            this.mailPilotLabel = new objects.Label(320, 40, "MAN OF STEEL");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);


            this.mailPilotLabel1 = new objects.Label(280, 170, "Superman have gained enough of\n\nstrength and now shuld be saving\n\npeople from an airplane crash\n\navoiing the debris f the crashed\n\nairplane.");
            this.mailPilotLabel1.font = "24px Consolas";
            this.mailPilotLabel1.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel1.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel1);

            this.mailPilotLabel2 = new objects.Label(450, 415, "Level - III\n\n'Save the Day'");
            this.mailPilotLabel2.font = "20px Consolas";
            this.mailPilotLabel2.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel2.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel2);

            this.mailPilotLabel3 = new objects.Label(425, 465, "Next Level at 120 points");
            this.mailPilotLabel3.font = "14px Consolas";
            this.mailPilotLabel3.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel3.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel3);

            //Play Button
            this.playButton = new objects.Button(320, 350, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE_LEVEL3;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module