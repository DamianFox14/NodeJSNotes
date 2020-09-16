const test=require('./depend');

function Add(x,y) {
    return x+y;
}

async function addSlowly(x,y) {
    return new Promise((resolve) => {
            setTimeout(() => {
                console.log('promise end');
                resolve(x+y);
            }, 1000);
    });
}

function addCallback(x,y, callback) {
    callback(x+y);
}
function dependCheck(){
    console.log(test.getString());
    return test.getString();
}

module.exports = {
    Add: Add,
    addSlowly: addSlowly,
    addCallback: addCallback,
    dependCheck: dependCheck
}
