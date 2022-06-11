import { EventEmitter } from 'events';
import { createInterface } from 'readline';
import appConfig from './app/config.js';
import {
    printWelcome,
    printGoodbye,
    printCurrentWorkingDir 
} from './app/messages.js';
import { getAppUser } from './app/getAppUser.js';
import { commandConfig } from './command/config.js';
import { CommandHandler } from './command/handler.js';
import { CurrentPath } from './entity/currentPath.js';
import { ExitException } from './exception/exit.js';
import { LineWorker } from './input/lineWorker.js';
import { getHomeDir } from './os/index.js';

const username = getAppUser();
const homeDir = getHomeDir();

const currentPath = new CurrentPath(homeDir); 
const commandMapper = new Map(commandConfig);
const commandHandler = new CommandHandler(new EventEmitter(), commandMapper);
const lineWorker = new LineWorker(commandHandler, currentPath);
const reader = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: appConfig.promptString
});

printWelcome(username);
printCurrentWorkingDir(homeDir);
reader.prompt();

reader.on('line', (stringLine) => {
    try {
        lineWorker.processInput(stringLine.trim());
    } catch (error) {
        if (error instanceof ExitException) {
            reader.close();
        }

        console.log('Operation failed');
    } finally {
        reader.prompt();
    }
});

reader.on('close', () => {
    printGoodbye(username);
    process.exit(0);
});
