console.log('start prog');

main().catch((err) => {
    console.log(err);
})

console.log('end prog')

async function main() {
    await wait(10000);
    console.log('then statement - waited 10000');

    await wait(1000);
    console.log('then statement - waited 1000');
}


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
