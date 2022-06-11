import { ExitException } from '../exception/exit.js';

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
        'error',
        () => {throw new Error('oops');}
    ],
];
