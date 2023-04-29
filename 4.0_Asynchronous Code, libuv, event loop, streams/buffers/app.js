// Swtich between

// Buffers is mode globally available in NodeJS
var buf = new Buffer('Hello', 'utf8'); // utf-8 is default

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

// Overwrite the first 2 character
buf.write('wo');
console.log(buf.toString());

