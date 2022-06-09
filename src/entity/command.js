export class Command
{
    #currentPath;
    #name;
    #parameters;

    constructor(currentPath, name, parameters) {
        this.#currentPath = currentPath;
        this.#name = name;
        this.#parameters = parameters;
    }

    getCurrentPath() {
        return this.#currentPath;
    }

    getName() {
        return this.#name;
    }

    getParatemers() {
        return this.#parameters;
    }
}
