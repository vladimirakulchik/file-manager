import { InvalidInputException } from '../../exception/invalidInput.js';

export const upCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length > 0) {
        throw new InvalidInputException('Invalid input');
    }

    command.getCurrentPath().up();
}
