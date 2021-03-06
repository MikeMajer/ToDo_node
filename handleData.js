const colors = require('colors');
const fs = require('fs');

handleData = (type, title) => {

  const data = fs.readFileSync('data.json');
  let tasks = JSON.parse(data);

  if (type === 1 || type === 2) {
    const isExisted = tasks.find(task => task.title === title) ? true : false;
    if (type === 1 && isExisted) {
      return console.log("this task already exist.".red)
    } else if (type === 2 && !isExisted) {
      return console.log("I can't remove task which doesn't exist.".red);
    }
  }

  let dataJSON = "";

  switch (type) {
    case 1:
      tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
      const id = tasks.length + 1;
      tasks.push({ id: id, title: title });
      dataJSON = JSON.stringify(tasks);  // changing .json to string
      fs.writeFileSync('data.json', dataJSON);
      console.log(`adding file: ${title}`.white.bgGreen);
      break;
    case 2:
      const index = tasks.findIndex(task => task.title === title);
      tasks.splice(index, 1)
      tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
      dataJSON = JSON.stringify(tasks);
      fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log(`Task ${title} has been removed`.white.bgGreen);
      });
      break;
    case 3:
      console.log(`To do list contain ${tasks.length}. You have to:`);
      if (tasks.length) {
        tasks.forEach((task, index) => {
          if (index % 2) return console.log(task.title.green);
          return console.log(task.title.yellow);
        });
      }
      break;
  }
}

module.exports = handleData;