import { resolve } from 'path';
import { getFileHash } from '../../../action/getFileHash.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const hashCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 1) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();
    const filePath = resolve(baseDir, parameters[0]);

    console.log(getFileHash(filePath));
}
