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
        'cat',
        listeners.readCommandListener,
    ],
    [
        'add',
        listeners.addCommandListener,
    ],
    [
        'rn',
        listeners.renameCommandListener,
    ],
    [
        'cp',
        listeners.copyCommandListener,
    ],

    [
        'rm',
        listeners.deleteCommandListener,
    ],
    [
        'os',
        listeners.osCommandListener,
    ],
];
