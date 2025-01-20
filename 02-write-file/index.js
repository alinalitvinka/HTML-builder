const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

fs.open(path.join(__dirname, 'text.txt'), 'w', (err) => {
    if(err) throw err;
});

console.log('Please, enter text:');

const rl = readline.createInterface({ input, output });

function endInput() {
    console.log('The file is recorded');
    rl.close();
}

rl.on('line', (input) => {
    if (input == 'exit') {
        endInput();        
    } else {
        fs.appendFile(path.join(__dirname, 'text.txt'), input, (err) => {
            if(err) throw err;
        });
    }
});

rl.on('SIGINT', () => endInput()); 