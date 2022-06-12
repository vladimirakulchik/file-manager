import { resolve } from 'path';
import { renameFile } from '../../../action/renameFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const renameCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 2) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();

    const oldPath = resolve(baseDir, parameters[0]);
    const newPath = resolve(baseDir, parameters[1]);
    renameFile(oldPath, newPath);
}
