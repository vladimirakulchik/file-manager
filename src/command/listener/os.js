import { InvalidInputException } from '../../exception/invalidInput.js';
import {
    getEndOfLineEscaped,
    getCpus,
    getHomeDir,
    getUserName,
    getCpuArch
} from '../../os/index.js'

export const osCommandListener = (command) => {
    const parameters = command.getParatemers();

    if (parameters.length > 1) {
        throwError();
    }

    switch (parameters[0]) {
        case '--EOL':
            console.log(getEndOfLineEscaped());
            break;
        case '--cpus':
            console.log(getCpus());
            break;
        case '--homedir':
            console.log(getHomeDir());
            break;
        case '--username':
            console.log(getUserName());
            break;
        case '--architecture':
            console.log(getCpuArch());
            break;

        default:
            throwError();
    }
};

const throwError = () => {
    throw new InvalidInputException('Invalid input');
}
