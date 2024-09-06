import url from 'url';

const urlString = 'https://google.com/search?q=hello+world';
const urlObject = new URL(urlString); //url object

console.log(urlObject);
console.log(urlObject.pathname);

//format()
console.log(url.format(urlObject));

//import.meta.url -- file URL
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get('q'));