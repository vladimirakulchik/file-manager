import { parseCommandLine } from '../parser/parseCommandLine.js';

export class LineWorker
{
    #commandHandler;
    #currentPath;

    constructor(commandHandler, currentPath) {
        this.#commandHandler = commandHandler;
        this.#currentPath = currentPath;
    }

    processInput(stringLine) {
        try {
            const command = parseCommandLine(stringLine.trim(), this.#currentPath);
            this.#commandHandler.validateCommand(command.getName());
            this.#commandHandler.handle(command);

            console.log('SHOULD BE WORK DIR HERE');

        } catch (error) {
            console.error(error);
        }
    }
}
