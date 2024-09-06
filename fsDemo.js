// import fs from 'fs';


//                   // readFile() - callback version
// fs.readFile('./test.txt','utf8', (err, data) => {
//     if (err) throw err ; 
//     console.log(data);
// });

//                   // readFileSync()- Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);



import fs from 'fs/promises';

// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));


// readFile() - async/await
const readFile = async() =>{
    try{

        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    }catch(error){
        console.log(error);
    }

};


//writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello....i wrote this shit');
        console.log('file written');
    }catch(error){
        console.log(error);
    }
}

//appendFile()

const appendFile = async() =>{
    try{
        await fs.appendFile('./test.txt', ' \ni am appending this shit');
        console.log('file appended....');
    }catch(error){
        console.log(error);
    }
}


writeFile();
appendFile();
readFile();