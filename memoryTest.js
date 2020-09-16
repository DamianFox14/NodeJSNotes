const fs = require('fs');
const readStream = fs.createReadStream('./package.json');

const {pipeline, Transform} = require('stream');

// readStream.on('data', chunk => {
//     console.log(chunk.toString());
// });

const transStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

console.log(readStream.read());

const writeStream = fs.createWriteStream('test.txt');
writeStream.write('test');

pipeline(readStream, transStream, writeStream, (err)=>{});

