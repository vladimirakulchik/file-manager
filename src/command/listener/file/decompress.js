import { resolve } from 'path';
import { decompressFile } from '../../../action/decompressFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const decompressCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 2) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();
    const sourcePath = resolve(baseDir, parameters[0]);
    const destinationPath = resolve(baseDir, parameters[1]);

    decompressFile(sourcePath, destinationPath);
}
