import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(){
    console.log('Hello, World!');
}

function goodByeHandler(){
    console.log('Goodbye, World!');
}

//register event listners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

//emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');


//error handling
myEmitter.on('error', (err) => {
    console.error('Something went wrong:', err);
});

//error simulation
myEmitter.emit('error', new Error('Something went wrong!'));