const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
});

fs.readdir(path.join(__dirname, '/files'), (err, files) => {
    if (err) {
        throw err;
    } else {
        files.forEach(file => {

            fs.copyFile(`${__dirname}/files/${file}`, `${__dirname}/files-copy/${file}`,
                fs.constants.COPYFILE_FICLONE, (err) => {
                    if (err) {
                        console.log("Error Found:", err);
                    }
            });
        });
    }
});