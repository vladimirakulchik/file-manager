const KEY_PREFIX = '--';
const SEPARATOR = '=';

// Return Map entity.
export const parseAppArgs = () => {
    const cliArgs = process.argv.slice(2);
    const argsMap = new Map();

    cliArgs.forEach((argument) => {
        let [ key, value ] = argument.split(SEPARATOR);

        if (key.startsWith(KEY_PREFIX)) {
            key = key.slice(KEY_PREFIX.length);
        }

        argsMap.set(key, value ?? '');
    });

    return argsMap;
};
