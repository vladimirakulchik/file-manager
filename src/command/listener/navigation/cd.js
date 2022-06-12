import { InvalidInputException } from '../../../exception/invalidInput.js';

export const cdCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 1) {
        throw new InvalidInputException('Invalid input');
    }

    command.getCurrentPath().changeTo(parameters[0]);
}
