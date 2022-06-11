import { accessSync, constants } from 'fs';
import { resolve, parse, isAbsolute } from 'path';

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
        const resolvedPath = resolve(this.#path, newPath);

        try {
            accessSync(resolvedPath, constants.F_OK);
            this.#path = resolvedPath;
        } catch (err) {
            throw new Error('newPath does not exist');
        }
    }

    #isRootPath() {
        const rootPath = parse(this.#path).root;

        return this.#path === rootPath;
    }
}
