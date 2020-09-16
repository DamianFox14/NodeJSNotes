const {Transform, pipeline} = require('stream');

const upper = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

pipeline(process.stdin, upper, process.stdout, err => {
    if(err) {
        console.log(err);
    } else {
        console.log('pipeline completed successfully');
    }
});
