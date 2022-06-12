import { getEndOfLine } from '../os/index.js';

export const printWelcome = (username) => {
    console.log(`Welcome to the File Manager, ${username}!`);
}

export const printGoodbye = (username) => {
    console.log(getEndOfLine() + `Thank you for using File Manager, ${username}!`);
}

export const printCurrentWorkingDir = (path) => {
    console.log(getEndOfLine() + `You are currently in ${path}`);
}
