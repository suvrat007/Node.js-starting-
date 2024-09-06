import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname)

const server = http.createServer(async(req,res) => {
    // res.write('Hello  World!');

    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode=404;

    // res.writeHead(200, {'Content-Type': 'text/html'})

    // console.log(req.url);    
    // console.log(req.method);    


    // Check if GET request
    try {
        if(req.meathod==='GET'){
            let filePath;
            if(req.url=='/'){
                filePath=path.join(__dirname,'public','index.html');
            }else if(req.url === '/about'){
                filePath= path.join(__dirname,'pubic','about.html');                
            }else{
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
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