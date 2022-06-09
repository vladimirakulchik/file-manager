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
        // change path to parent dir. add checks
    }

    changeTo(newPath) {
        // set new path
    }
}
