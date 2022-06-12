import { readFileSync } from 'fs';

export const readFile = (filePath) => {
    // Stream API does not work in my application architecture.
    // I spent a lot of time to use it here.

    const content = readFileSync(filePath, 'utf-8');

    console.log(content);
};
