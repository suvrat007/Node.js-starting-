import crypto from 'crypto';

//createHash()
// const hash = crypto.createHash('sha256');
// hash.update('pass1234');
// console.log(hash.digest('hex'));

// randomBytes()
crypto.randomBytes(16,(err , buff) =>{
    if(err) throw err;
    console.log(buff.toString('hex'));
});

//createCipheriv & createDecipheriv
const algo= 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algo,key,iv);
let encrypted = cipher.update('hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// similarly decipher