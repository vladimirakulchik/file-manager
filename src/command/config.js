import * as listeners from './listener/index.js';

export const commandConfig = [
    [
        '.exit',
        listeners.exitCommandListener,
    ],
    [
        'up',
        listeners.upCommandListener,
    ],
    [
        'cd',
        listeners.cdCommandListener,
    ],
    [
        'ls',
        listeners.lsCommandListener,
    ],




    [
        'os',
        listeners.osCommandListener,
    ],


    // [
    //     'error',
    //     () => {throw new Error('oops');}
    // ],
];
