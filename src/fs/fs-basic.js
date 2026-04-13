const fs = require('fs');

function readRoles() {
  const data = fs.readFileSync('./src/fs/roles.json', 'utf-8');
  const result = {
    sync: JSON.parse(data)
  }

  fs.readFile('./src/fs/roles.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    result.async = JSON.parse(data);
    console.log(JSON.stringify(result));
  });
}

console.log(JSON.stringify(readRoles()));