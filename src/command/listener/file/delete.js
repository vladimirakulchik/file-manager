import { resolve } from 'path';
import { deleteFile } from '../../../action/deleteFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const deleteCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 1) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();
    const filePath = resolve(baseDir, parameters[0]);
    deleteFile(filePath);
}
