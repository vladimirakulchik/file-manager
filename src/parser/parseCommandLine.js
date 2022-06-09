import { Command } from '../entity/command.js';

export const parseCommandLine = (stringLine, currentPath) => {
    // get parameters and name from string
    const name = stringLine;
    const parameters = [];

    return new Command(currentPath, name, parameters);
}
