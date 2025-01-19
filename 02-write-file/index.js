const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

fs.open(path.join(__dirname, 'text.txt'), 'w', (err) => {
    if(err) throw err;
});

const rl = readline.createInterface({ input, output });

rl.question('Please, enter text:', (answer) => {
        fs.appendFile(path.join(__dirname, 'text.txt'), answer, (err) => {
            if(err) throw err;
        });
    console.log('The file is recorded');
    rl.close();
});