const fs = require("fs");

fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        fs.rename('input.txt', 'input2.txt', function(err) {
           console.log('renamed from input2.txt');
            fs.stat('input.txt', function (err, stats) {
                console.log("input.txt isFile ? " + (stats!==undefined));
            });
            fs.stat('input2.txt', function (err, stats) {
                console.log("input2.txt isFile ? " + stats.isFile());
            });

            fs.unlink('input2.txt', function (err) {
                if (err) throw err;
                console.log('File deleted!');
                fs.stat('input2.txt', function (err, stats) {
                    console.log("input2.txt isFile ? " + (stats!==undefined));
                });

            });
        });
    });
});
