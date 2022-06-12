import { resolve, parse } from 'path';
import { copyFile } from '../../../action/copyFile.js';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const copyCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 2) {
        throw new InvalidInputException('Invalid input');
    }

    const baseDir = command.getCurrentPath().getCurrentWorkingDirectory();
    const sourcePath = resolve(baseDir, parameters[0]);

    const fileName = parse(sourcePath).base;
    const destinationPath = resolve(baseDir, parameters[1], fileName);

    copyFile(sourcePath, destinationPath);
}
