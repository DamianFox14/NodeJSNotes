const { PassThrough, pipeline } = require('stream');
const { spawn, exec } = require('child_process');

// best option
const child = spawn('echo test', {
    stdio: 'inherit',
    shell: true
});

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

//second best
const child2 = spawn('dir', ['childProcess.js']);

child2.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});


pipeline(child2.stdout, process.stdout, (err)=> {
    console.log(`err: ${err}`);
});

pipeline(child2.stderr, process.stderr, (err)=> {
    console.log(`err: ${err}`);
});


//worst injection issues
const child3 = exec('dir childProcess.js');

child3.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});


pipeline(child3.stdout, process.stdout, (err)=> {
    console.log(`err: ${err}`);
});

pipeline(child3.stderr, process.stderr, (err)=> {
    console.log(`err: ${err}`);
});
