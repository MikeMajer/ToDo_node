const handleData = require('./handleData');

const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log("enter the name of adding task (text!!!)".red)
    } else if (add.length < 7) {
      return console.log("name of the task has to have more than 6 characters".red)
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log("enter the name of the deleting item. It has to be text and it has to have a minimum of 6 characters".red);
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log('Vague command. Try to use --add="task name", --remove="taks name", or --list option'.red);
  }
}

module.exports = handleCommand;