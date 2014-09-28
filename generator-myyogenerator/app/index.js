'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var MyyogeneratorGenerator = yeoman.generators.Base.extend({
  promptUser: function(){
      var done = this.async();

      //Greetings from Yeoman
      console.log(this.yeoman);

      //Questions for the user
      var prompts = [
        {
          name: 'appName',
          message: 'What\'s your app\'s name?'
        },
        {
          type: 'confirm',
          name: 'addDemoSection',
          message: 'Would you like to generate a demo section?',
          default: true
        }
      ];

      this.prompt(prompts, function(props){
        this.appName = props.appName;
        this.addDemoSection = props.addDemoSection;

        done();
      }.bind(this));
  }
});

module.exports = MyyogeneratorGenerator;
