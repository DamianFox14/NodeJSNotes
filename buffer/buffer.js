const buffer = Buffer.alloc(16)

buffer.write('hello', 'utf-8');

console.log(buffer);
console.log(buffer.toString('utf-8'));

