import { resolve } from 'path';
import { createEmptyFile } from '../../../action/createEmptyFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const addCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 1) {
        throw new InvalidInputException('Invalid input');
    }

    const path = command.getCurrentPath().getCurrentWorkingDirectory();
    createEmptyFile(resolve(path, parameters[0]));
}
