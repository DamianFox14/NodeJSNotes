console.log('start prog');

// wait().then(() => {
//     console.log('then statement');
// }).catch((err)=>{
//     console.log(err);
// });

wait(10000).then((ms) => {
    console.log('then statement - waited '+ms);
    return wait(1000);
}).then((ms)=> {
    console.log('then statement - waited '+ms);
}).catch((err)=>{
    console.log(err);
});

console.log('end prog')



function wait(ms) {
    return new Promise((resolve, reject) => {
        console.log('promise start');
        if(ms === undefined) {
            reject('ms is required');
        } else {
            setTimeout(() => {
                console.log('promise end');
                resolve(ms);
            }, ms);
        }
    });
}
