const { PassThrough, pipeline } = require('stream');
const fs = require("fs");

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('pipelineOutput.txt');

const passThrough = new PassThrough();

pipeline(input, passThrough, output, err => {
   if(err) {
       console.log(err);
   } else {
       console.log('pipeline completed successfully');
   }
});
