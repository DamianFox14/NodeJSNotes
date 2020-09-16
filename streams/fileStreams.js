const fs = require("fs");

// const outputStream = fs.createWriteStream('output.txt');
// process.stdin.pipe(outputStream);

const readStream = fs.createReadStream('input.txt');

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

readStream.pipe(process.stdout);
