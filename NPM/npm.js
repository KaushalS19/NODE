// const chalk = require('chalk');
import chalk from "chalk";
import validator from "validator";
// console.log(chalk.red.inverse("Sorry, Something went wrong..."));
// console.log(chalk.green.inverse("Success.."));

validator.isEmail("kaushal@gmail.com")
  ? console.log(chalk.green.inverse("Success.."))
  : console.log(chalk.red.inverse("Sorry, Something went wrong..."));
validator.isMobilePhone("972606634")
  ? console.log(chalk.green.inverse("Success.."))
  : console.log(chalk.red.inverse("Sorry, Something went wrong..."));
// (validator.isMobilePhone('972606634')) ? console.log(chalk.green.inverse("Success..")) : console.log(chalk.red.inverse("Sorry, Something went wrong..."));
