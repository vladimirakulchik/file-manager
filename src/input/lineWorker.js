import { parseCommandLine } from '../parser/parseCommandLine.js';
import { InvalidInputException } from '../exception/invalidInput.js';
import { printCurrentWorkingDir } from '../app/messages.js';

export class LineWorker
{
    #commandHandler;
    #currentPath;

    constructor(commandHandler, currentPath) {
        this.#commandHandler = commandHandler;
        this.#currentPath = currentPath;
    }

    processInput(stringLine) {
        if ('' === stringLine.trim()) {
            return;
        }

        try {
            const command = parseCommandLine(stringLine, this.#currentPath);
            this.#commandHandler.validateCommand(command);
            this.#commandHandler.handle(command);

            const cwd = this.#currentPath.getCurrentWorkingDirectory();
            printCurrentWorkingDir(cwd);
        } catch (error) {
            if (error instanceof InvalidInputException) {
                console.log(error.message);
                return;
            }

            throw error;
        }
    }
}
