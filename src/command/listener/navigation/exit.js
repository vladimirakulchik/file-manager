import { ExitException } from '../../../exception/exit.js';

export const exitCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length !== 0) {
        throw new InvalidInputException('Invalid input');
    }

    throw new ExitException();
}
