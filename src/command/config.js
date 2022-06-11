import {
    osCommandListener,
    upCommandListener,
    exitCommandListener
} from './listener/index.js';

export const commandConfig = [
    [
        '.exit',
        exitCommandListener,
    ],
    [
        'up',
        upCommandListener,
    ],
    [
        'os',
        osCommandListener,
    ],




    // [
    //     'error',
    //     () => {throw new Error('oops');}
    // ],
];
