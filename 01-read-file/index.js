const fs = require('fs');
const path = require('path');

const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

stream.on('readable', () => {
    let data;
    while (null !== (data = stream.read())) {
      console.log(data);
    }
  });