import { writeFileSync } from 'fs';

export const createEmptyFile = (filePath) => {
    try {
        writeFileSync(filePath, '', { flag: 'wx' });
    } catch (error) {
        throw new Error('Failed to create file');
    }
};
