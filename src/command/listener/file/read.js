import { resolve } from 'path';
import { readFile } from '../../../action/readFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const readCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 1) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();
    const filePath = resolve(baseDir, parameters[0]);

    readFile(filePath);
}
