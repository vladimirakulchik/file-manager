import { parseAppArgs } from '../parser/parseArgs.js';

export const getAppUser = () => {
    const argsMap = parseAppArgs();

    return argsMap.get('username') ?? 'Mr. X';
}
