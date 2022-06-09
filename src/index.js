import { EventEmitter } from 'events';
import { createInterface } from 'readline';
import { commandConfig } from './command/config.js';
import { CommandHandler } from './command/handler.js';
import { CurrentPath } from './entity/currentPath.js';
import { LineWorker } from './input/lineWorker.js';
import appConfig from './app/config.js';

const onStart = (username) => {
    console.log(`Welcome to the File Manager, ${username}!`);
}

const onFinish = (username) => {
    console.log(`Thank you for using File Manager, ${username}!`);
    process.exit(0);
}


// get from script args 
const username = 'AAA ';

// get home dir
const currentPath = new CurrentPath('/home'); 

const commandMapper = new Map(commandConfig);
const commandHandler = new CommandHandler(new EventEmitter(), commandMapper);
const lineWorker = new LineWorker(commandHandler, currentPath);
const reader = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: appConfig.promptString
});

onStart(username);
reader.prompt();

reader.on('line', (stringLine) => {
    lineWorker.processInput(stringLine);
    reader.prompt();
});

reader.on('close', () => {
    onFinish(username);
});
