import { EOL } from 'os';

export const getEndOfLine = () => {
    return EOL;
};

export const getEndOfLineEscaped = () => {
    return EOL.replace('\r', '\\r').replace('\n', '\\n');
};
