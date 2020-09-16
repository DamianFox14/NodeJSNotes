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


module.exports = {
    Add: Add,
    addSlowly: addSlowly,
    addCallback: addCallback
}
