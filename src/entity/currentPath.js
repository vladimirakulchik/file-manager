import { resolve, parse } from 'path';

export class CurrentPath
{
    #path;

    constructor(path) {
        this.#path = path;
    }

    getCurrentWorkingDirectory() {
        return this.#path;
    }

    up() {
        if (this.#isRootPath()) {
            return;
        }

        this.#path = resolve(this.#path, '..');
    }

    changeTo(newPath) {
        // set new path
    }

    #isRootPath() {
        const rootPath = parse(this.#path).root;

        return this.#path === rootPath;
    }
}
