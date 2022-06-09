export class CommandHandler
{
    #emitter;
    #commandMapper;

    constructor(emitter, commandMapper) {
        this.#emitter = emitter;
        this.#commandMapper = commandMapper;

        this.#setListeners();
    }

    handle(command) {
        this.#emitter.emit(command.getName(), command);
    }

    validateCommand(commandName) {
        if (!this.#isValidCommand(commandName)) {
            throw new Error('COMMAND INVALID!!!');
        }
    }

    #isValidCommand(commandName) {
        return this.#commandMapper.has(commandName);
    }

    #setListeners() {
        this.#commandMapper.forEach((callback, commandName) => {

            // add try catch to each callback

            this.#emitter.on(commandName, callback);
        });
    }
}
