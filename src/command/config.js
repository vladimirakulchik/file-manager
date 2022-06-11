import { ExitException } from '../exception/exit.js';
import { osCommandListener } from './listener/os.js';

export const commandConfig = [
    [
        '.exit',
        () => {throw new ExitException();}
    ],
    [
        'up',
        () => {console.log('ToDo create up function');}
    ],
    [
        'os',
        osCommandListener
    ],





    [
        'error',
        () => {throw new Error('oops');}
    ],
];
