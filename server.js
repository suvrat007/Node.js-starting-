import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname)

const server = http.createServer((req,res) => {
    // res.write('Hello  World!');

    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode=404;

    // res.writeHead(200, {'Content-Type': 'text/html'})

    // console.log(req.url);    
    // console.log(req.method);    

    try {
        if(req.meathod=='GET'){
            if(req.url=='/'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Hello World!</h1>');
            }else if(req.url === '/about'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>About Us</h1>');
            }else{
                res.writeHead(404, {'Content-Type': 'teext/hmtl'});
                res.end('<h1>Not Found</h1>');
            }
        }else {
            throw new Error('Meathod Not Allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
    }

    // if(req.url=='/'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.end('<h1>Hello World!</h1>');
    // }else if(req.url === '/about'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.end('<h1>About Us</h1>');
    // }else{
    //     res.writeHead(404, {'Content-Type': 'teext/hmtl'});
    //     res.end('<h1>Not Found</h1>');
    // }

    // res.end('<h1>Hello World!</h1>');
    // res.end('Hello  World!');

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});