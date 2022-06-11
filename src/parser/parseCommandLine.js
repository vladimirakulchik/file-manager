import { Command } from '../entity/command.js';

const SEPARATOR = ' ';

export const parseCommandLine = (stringLine, currentPath) => {
    const commandArgs = stringLine.split(SEPARATOR);

    const name = commandArgs[0].trim();
    const parameters = commandArgs.slice(1);

    return new Command(currentPath, name, parameters);
}
