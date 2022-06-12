import { Command } from '../entity/command.js';

const PARSE_REGEXP = /"[^"]+"|'[^']+'|\S+/g;

export const parseCommandLine = (stringLine, currentPath) => {
    const commandArgs = stringLine.match(PARSE_REGEXP);
    const name = commandArgs[0];
    let parameters = commandArgs.slice(1);

    parameters = parameters.map((parameter) => {
        return parameter.replace(/['"]+/g, '');
    });

    return new Command(currentPath, name, parameters);
}
