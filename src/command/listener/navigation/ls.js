import { readdirSync } from 'fs';
import { InvalidInputException } from '../../../exception/invalidInput.js';

export const lsCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length > 0) {
        throw new InvalidInputException('Invalid input');
    }

    const path = command.getCurrentPath().getCurrentWorkingDirectory();
    console.log(readdirSync(path));
}
