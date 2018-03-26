const path = require('path');
const fs = require('fs');

module.exports = {
  root(...args) {
    return path.join(__dirname, '..', ...args);
  },
  loadTasks(gulp, params, taskFolder) {
    let taskCount = 0;
    fs.readdirSync(taskFolder).forEach(name => {
      const filepath = path.resolve(taskFolder, name);
      const stat = fs.statSync(filepath);
      if (stat.isFile() && path.extname(name) === '.js') {
        // 满足加载规则
        require(filepath)(gulp, params);
        taskCount++;
      }
    });
    console.log(`Load ${taskCount} tasks.`);
  }
};
