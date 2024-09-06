import url  from 'url';
import path from 'path';

const filePath = './dir1/dir2/test.txt';


// basename()
console.log(path.basename(filePath));       // gives- test.txt


// dirname()
console.log(path.dirname(filePath));       // gives- ./dir1/dir2/


// extname()
console.log(path.extname(filePath));       // gives- .txt


// parse()
console.log(path.parse(filePath));       // gives-breaks everything into parts and gives
                                            //     root: '',
                                            //     dir: './dir1/dir2',
                                            //     base: 'test.txt',
                                            //     ext: '.txt',
                                            //     name: 'test'

const __filename= url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// join() -- no matter what system ur workin on....this will change the directory name accordingly
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log(filePath2);


// resolve()
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log(filePath3);
