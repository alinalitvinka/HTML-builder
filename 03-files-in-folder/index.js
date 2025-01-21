const fs = require('fs');
const path = require('path');

const commonPath = path.join(__dirname, './secret-folder');

fs.readdir(commonPath, (err, files) => {
    if (err)
    console.log(err);
  else {
    files.forEach(file => {

        fs.stat(commonPath.concat('\\', file), (err, stats) => {
            const size = stats.size;
            if (stats.isFile()) {
                console.log(`${file.split('.')[0]} - ${file.split('.')[1]} - ${size}b`);
            }
        });
    })
  }
});