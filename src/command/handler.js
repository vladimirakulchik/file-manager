import { InvalidInputException } from '../exception/invalidInput.js';

export class CommandHandler
{
    #emitter;
    #commandMapper;

    constructor(emitter, commandMapper) {
        this.#emitter = emitter;
        this.#commandMapper = commandMapper;

        this.#setListeners();
    }

    validateCommand(command) {
        if (command && !this.#isCommandExist(command.getName())) {
            throw new InvalidInputException('Invalid input');
        }
    }

    handle(command) {
        this.#emitter.emit(command.getName(), command);
    }

    #isCommandExist(commandName) {
        return this.#commandMapper.has(commandName);
    }

    #setListeners() {
        this.#commandMapper.forEach((callback, commandName) => {
            this.#emitter.on(commandName, callback);
        });
    }
}
